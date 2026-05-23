import { describe, it, expect, afterEach } from 'vitest';
import type { DsInput } from '../../src/components/input/ds-input.js';

async function mountInput(html: string): Promise<DsInput & { updateComplete: Promise<boolean> }> {
  document.body.innerHTML = html;
  await customElements.whenDefined('ds-input');
  const el = document.querySelector('ds-input') as DsInput & { updateComplete: Promise<boolean> };
  await el.updateComplete;
  return el;
}

describe('ds-input — screen reader / ARIA', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('renders a visible label element (not aria-label)', async () => {
    const el = await mountInput('<ds-input label="Email address"></ds-input>');
    const label = el.shadowRoot!.querySelector('label');
    expect(label).toBeTruthy();
    expect(label!.textContent?.trim()).toContain('Email address');
  });

  it('label is programmatically linked to input via for/id', async () => {
    const el = await mountInput('<ds-input label="Username"></ds-input>');
    const label = el.shadowRoot!.querySelector('label')!;
    const input = el.shadowRoot!.querySelector('input')!;
    expect(label.getAttribute('for')).toBe(input.id);
  });

  it('required sets aria-required="true" and native required on input', async () => {
    const el = await mountInput('<ds-input label="Email" required></ds-input>');
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('aria-required')).toBe('true');
    expect(input.required).toBe(true);
  });

  it('error sets aria-invalid="true" and renders role=alert', async () => {
    const el = await mountInput('<ds-input label="Email" error="Invalid email address"></ds-input>');
    const input = el.shadowRoot!.querySelector('input')!;
    const alert = el.shadowRoot!.querySelector('[role="alert"]')!;
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(alert.textContent?.trim()).toBe('Invalid email address');
  });

  it('aria-describedby links input to error message', async () => {
    const el = await mountInput('<ds-input label="Email" error="Bad email"></ds-input>');
    const input = el.shadowRoot!.querySelector('input')!;
    const alert = el.shadowRoot!.querySelector('[role="alert"]')!;
    expect(input.getAttribute('aria-describedby')).toContain(alert.id);
  });

  it('aria-describedby links input to hint text', async () => {
    const el = await mountInput('<ds-input label="Name" hint="Use full name"></ds-input>');
    const input = el.shadowRoot!.querySelector('input')!;
    const hint = el.shadowRoot!.querySelector('.hint')!;
    expect(input.getAttribute('aria-describedby')).toContain(hint.id);
  });

  it('no aria-invalid when no error', async () => {
    const el = await mountInput('<ds-input label="Name"></ds-input>');
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('aria-invalid')).toBe('false');
  });
});
