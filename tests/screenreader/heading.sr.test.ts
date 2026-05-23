import { describe, it, expect, afterEach } from 'vitest';
import type { DsHeading } from '../../src/components/heading/ds-heading.js';

async function mountHeading(html: string): Promise<DsHeading & { updateComplete: Promise<boolean> }> {
  document.body.innerHTML = html;
  await customElements.whenDefined('ds-heading');
  const el = document.querySelector('ds-heading') as DsHeading & { updateComplete: Promise<boolean> };
  await el.updateComplete;
  return el;
}

describe('ds-heading — screen reader / ARIA', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('renders semantic h1 (not a div with role=heading)', async () => {
    const el = await mountHeading('<ds-heading level="1" text="Welcome"></ds-heading>');
    expect(el.shadowRoot!.querySelector('h1')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('[role="heading"]')).toBeNull();
  });

  it('h1 contains the heading text', async () => {
    const el = await mountHeading('<ds-heading level="1" text="Page title"></ds-heading>');
    expect(el.shadowRoot!.querySelector('h1')!.textContent).toBe('Page title');
  });

  it('renders h2 for level 2', async () => {
    const el = await mountHeading('<ds-heading level="2" text="Section"></ds-heading>');
    expect(el.shadowRoot!.querySelector('h2')).toBeTruthy();
  });

  it('renders h3 for level 3', async () => {
    const el = await mountHeading('<ds-heading level="3" text="Sub"></ds-heading>');
    expect(el.shadowRoot!.querySelector('h3')).toBeTruthy();
  });

  it('renders correct h4 through h6', async () => {
    for (const level of [4, 5, 6] as const) {
      document.body.innerHTML = `<ds-heading level="${level}" text="Test"></ds-heading>`;
      const el = document.querySelector('ds-heading') as DsHeading & { updateComplete: Promise<boolean> };
      await el.updateComplete;
      expect(el.shadowRoot!.querySelector(`h${level}`)).toBeTruthy();
      document.body.innerHTML = '';
    }
  });

  it('size override attribute changes class without changing tag level', async () => {
    const el = await mountHeading('<ds-heading level="2" text="X" size="sm"></ds-heading>');
    expect(el.shadowRoot!.querySelector('h2')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('h2')!.className).toContain('size-sm');
  });
});
