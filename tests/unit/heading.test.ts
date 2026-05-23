import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { DsHeading } from '../../src/components/heading/ds-heading.js';

describe('ds-heading', () => {
  it('renders h1 when level=1', async () => {
    const el = await fixture<DsHeading>(html`<ds-heading level="1" text="Title"></ds-heading>`);
    expect(el.shadowRoot!.querySelector('h1')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('h1')!.textContent).toBe('Title');
  });

  it('renders h2 when level=2', async () => {
    const el = await fixture<DsHeading>(html`<ds-heading level="2" text="Section"></ds-heading>`);
    expect(el.shadowRoot!.querySelector('h2')).toBeTruthy();
  });

  it('renders h3 when level=3', async () => {
    const el = await fixture<DsHeading>(html`<ds-heading level="3" text="Sub"></ds-heading>`);
    expect(el.shadowRoot!.querySelector('h3')).toBeTruthy();
  });

  it('renders h4 through h6 correctly', async () => {
    for (const level of [4, 5, 6] as const) {
      const el = await fixture<DsHeading>(html`<ds-heading level=${level} text="X"></ds-heading>`);
      expect(el.shadowRoot!.querySelector(`h${level}`)).toBeTruthy();
    }
  });

  it('applies size class when size attribute is set', async () => {
    const el = await fixture<DsHeading>(html`<ds-heading level="2" text="X" size="sm"></ds-heading>`);
    const h2 = el.shadowRoot!.querySelector('h2')!;
    expect(h2.className).toContain('size-sm');
  });

  it('applies default size class based on level', async () => {
    const el = await fixture<DsHeading>(html`<ds-heading level="1" text="X"></ds-heading>`);
    const h1 = el.shadowRoot!.querySelector('h1')!;
    expect(h1.className).toContain('size-4xl');
  });

  it('applies weight class', async () => {
    const el = await fixture<DsHeading>(html`<ds-heading level="2" text="X" weight="semibold"></ds-heading>`);
    const h2 = el.shadowRoot!.querySelector('h2')!;
    expect(h2.className).toContain('weight-semibold');
  });

  it('reflects level attribute', async () => {
    const el = await fixture<DsHeading>(html`<ds-heading level="3" text="X"></ds-heading>`);
    expect(el.getAttribute('level')).toBe('3');
  });
});
