import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { DsBadge } from '../../src/components/badge/ds-badge.js';

describe('ds-badge', () => {
  it('renders label text', async () => {
    const el = await fixture<DsBadge>(html`<ds-badge label="Active"></ds-badge>`);
    expect(el.shadowRoot!.querySelector('span')!.textContent?.trim()).toBe('Active');
  });

  it('uses role="status" for non-decorative variants', async () => {
    const el = await fixture<DsBadge>(html`<ds-badge label="Active" variant="success"></ds-badge>`);
    expect(el.shadowRoot!.querySelector('span')!.getAttribute('role')).toBe('status');
  });

  it('uses role="presentation" and aria-hidden for decorative variant', async () => {
    const el = await fixture<DsBadge>(html`<ds-badge label="●" variant="decorative"></ds-badge>`);
    const span = el.shadowRoot!.querySelector('span')!;
    expect(span.getAttribute('role')).toBe('presentation');
    expect(span.getAttribute('aria-hidden')).toBe('true');
  });

  it('reflects variant attribute', async () => {
    const el = await fixture<DsBadge>(html`<ds-badge label="X" variant="error"></ds-badge>`);
    expect(el.getAttribute('variant')).toBe('error');
  });

  it('reflects size attribute', async () => {
    const el = await fixture<DsBadge>(html`<ds-badge label="X" size="sm"></ds-badge>`);
    expect(el.getAttribute('size')).toBe('sm');
  });
});
