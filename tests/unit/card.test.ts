import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { DsCard } from '../../src/components/card/ds-card.js';

describe('ds-card', () => {
  it('renders an article element', async () => {
    const el = await fixture<DsCard>(html`<ds-card></ds-card>`);
    expect(el.shadowRoot!.querySelector('article')).toBeTruthy();
  });

  it('renders heading when heading attribute is set', async () => {
    const el = await fixture<DsCard>(html`<ds-card heading="Account summary"></ds-card>`);
    const p = el.shadowRoot!.querySelector('.card-heading')!;
    expect(p.textContent?.trim()).toBe('Account summary');
  });

  it('does not render heading element when heading is not set', async () => {
    const el = await fixture<DsCard>(html`<ds-card></ds-card>`);
    expect(el.shadowRoot!.querySelector('.card-heading')).toBeNull();
  });

  it('renders default slot', async () => {
    const el = await fixture<DsCard>(html`<ds-card><span id="child">hello</span></ds-card>`);
    const slot = el.shadowRoot!.querySelector('slot:not([name])')!;
    expect(slot).toBeTruthy();
  });

  it('renders footer slot', async () => {
    const el = await fixture<DsCard>(html`<ds-card></ds-card>`);
    const footer = el.shadowRoot!.querySelector('slot[name="footer"]')!;
    expect(footer).toBeTruthy();
  });

  it('reflects variant and padding attributes', async () => {
    const el = await fixture<DsCard>(html`<ds-card variant="outlined" padding="lg"></ds-card>`);
    expect(el.getAttribute('variant')).toBe('outlined');
    expect(el.getAttribute('padding')).toBe('lg');
  });
});
