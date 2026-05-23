import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { DsLayout } from '../../src/components/layout/ds-layout.js';

describe('ds-layout', () => {
  it('renders header, main, and footer landmark elements', async () => {
    const el = await fixture<DsLayout>(html`<ds-layout></ds-layout>`);
    const sr = el.shadowRoot!;
    expect(sr.querySelector('header')).toBeTruthy();
    expect(sr.querySelector('main')).toBeTruthy();
    expect(sr.querySelector('footer')).toBeTruthy();
  });

  it('renders header slot', async () => {
    const el = await fixture<DsLayout>(html`<ds-layout></ds-layout>`);
    expect(el.shadowRoot!.querySelector('slot[name="header"]')).toBeTruthy();
  });

  it('renders sidebar slot', async () => {
    const el = await fixture<DsLayout>(html`<ds-layout></ds-layout>`);
    expect(el.shadowRoot!.querySelector('slot[name="sidebar"]')).toBeTruthy();
  });

  it('renders footer slot', async () => {
    const el = await fixture<DsLayout>(html`<ds-layout></ds-layout>`);
    expect(el.shadowRoot!.querySelector('slot[name="footer"]')).toBeTruthy();
  });

  it('reflects sidebar-position attribute', async () => {
    const el = await fixture<DsLayout>(html`<ds-layout sidebar-position="right"></ds-layout>`);
    expect(el.getAttribute('sidebar-position')).toBe('right');
  });

  it('reflects max-width attribute', async () => {
    const el = await fixture<DsLayout>(html`<ds-layout max-width="md"></ds-layout>`);
    expect(el.getAttribute('max-width')).toBe('md');
  });

  it('reflects no-header and no-footer boolean attributes', async () => {
    const el = await fixture<DsLayout>(html`<ds-layout no-header no-footer></ds-layout>`);
    expect(el.hasAttribute('no-header')).toBe(true);
    expect(el.hasAttribute('no-footer')).toBe(true);
  });
});
