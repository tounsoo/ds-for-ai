import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { DsText } from '../../src/components/text/ds-text.js';

describe('ds-text', () => {
  it('renders content in a paragraph element', async () => {
    const el = await fixture<DsText>(html`<ds-text content="Hello world"></ds-text>`);
    const p = el.shadowRoot!.querySelector('p')!;
    expect(p.textContent).toBe('Hello world');
  });

  it('applies size class', async () => {
    const el = await fixture<DsText>(html`<ds-text content="X" size="sm"></ds-text>`);
    expect(el.shadowRoot!.querySelector('p')!.className).toContain('size-sm');
  });

  it('applies color class', async () => {
    const el = await fixture<DsText>(html`<ds-text content="X" color="secondary"></ds-text>`);
    expect(el.shadowRoot!.querySelector('p')!.className).toContain('color-secondary');
  });

  it('reflects size and truncate attributes', async () => {
    const el = await fixture<DsText>(html`<ds-text content="X" size="lg" truncate></ds-text>`);
    expect(el.getAttribute('size')).toBe('lg');
    expect(el.hasAttribute('truncate')).toBe(true);
  });

  it('applies weight class', async () => {
    const el = await fixture<DsText>(html`<ds-text content="X" weight="bold"></ds-text>`);
    expect(el.shadowRoot!.querySelector('p')!.className).toContain('weight-bold');
  });
});
