import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { DsStack } from '../../src/components/stack/ds-stack.js';

describe('ds-stack', () => {
  it('renders a slot', async () => {
    const el = await fixture<DsStack>(html`<ds-stack></ds-stack>`);
    expect(el.shadowRoot!.querySelector('slot')).toBeTruthy();
  });

  it('has default direction column and gap 4', async () => {
    const el = await fixture<DsStack>(html`<ds-stack></ds-stack>`);
    expect(el.direction).toBe('column');
    expect(el.gap).toBe('4');
  });

  it('reflects direction attribute', async () => {
    const el = await fixture<DsStack>(html`<ds-stack direction="row"></ds-stack>`);
    expect(el.getAttribute('direction')).toBe('row');
  });

  it('reflects gap attribute', async () => {
    const el = await fixture<DsStack>(html`<ds-stack gap="6"></ds-stack>`);
    expect(el.getAttribute('gap')).toBe('6');
  });

  it('reflects wrap attribute', async () => {
    const el = await fixture<DsStack>(html`<ds-stack wrap></ds-stack>`);
    expect(el.hasAttribute('wrap')).toBe(true);
  });

  it('reflects align and justify attributes', async () => {
    const el = await fixture<DsStack>(html`<ds-stack align="center" justify="between"></ds-stack>`);
    expect(el.getAttribute('align')).toBe('center');
    expect(el.getAttribute('justify')).toBe('between');
  });
});
