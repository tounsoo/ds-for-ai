import { describe, it, expect, afterEach } from 'vitest';
import type { DsButton } from '../../src/components/button/ds-button.js';

async function mountButton(html: string): Promise<DsButton & { updateComplete: Promise<boolean> }> {
  document.body.innerHTML = html;
  await customElements.whenDefined('ds-button');
  const el = document.querySelector('ds-button') as DsButton & { updateComplete: Promise<boolean> };
  await el.updateComplete;
  return el;
}

describe('ds-button — screen reader / ARIA', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('inner button has accessible name from label attribute', async () => {
    const el = await mountButton('<ds-button label="Save changes"></ds-button>');
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.getAttribute('aria-label')).toBe('Save changes');
  });

  it('inner button is a native button element (implicit ARIA role)', async () => {
    const el = await mountButton('<ds-button label="Go"></ds-button>');
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.tagName.toLowerCase()).toBe('button');
  });

  it('loading state renders spinner with aria-label="Loading"', async () => {
    const el = await mountButton('<ds-button label="Saving" loading></ds-button>');
    const spinner = el.shadowRoot!.querySelector('[aria-label="Loading"]');
    expect(spinner).toBeTruthy();
    expect(spinner!.getAttribute('role')).toBe('status');
  });

  it('loading state makes inner button disabled', async () => {
    const el = await mountButton('<ds-button label="Go" loading></ds-button>');
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.disabled).toBe(true);
    expect(btn.getAttribute('aria-disabled')).toBe('true');
  });

  it('disabled attribute sets aria-disabled="true" on inner button', async () => {
    const el = await mountButton('<ds-button label="Submit" disabled></ds-button>');
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.disabled).toBe(true);
    expect(btn.getAttribute('aria-disabled')).toBe('true');
  });

  it('enabled state has aria-disabled="false"', async () => {
    const el = await mountButton('<ds-button label="Submit"></ds-button>');
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.getAttribute('aria-disabled')).toBe('false');
  });
});
