import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { DsButton } from '../../src/components/button/ds-button.js';

describe('ds-button', () => {
  it('renders a native button with the label', async () => {
    const el = await fixture<DsButton>(html`<ds-button label="Save changes"></ds-button>`);
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn).toBeTruthy();
    expect(btn.getAttribute('aria-label')).toBe('Save changes');
  });

  it('reflects variant attribute', async () => {
    const el = await fixture<DsButton>(html`<ds-button label="X" variant="danger"></ds-button>`);
    expect(el.getAttribute('variant')).toBe('danger');
  });

  it('reflects size attribute', async () => {
    const el = await fixture<DsButton>(html`<ds-button label="X" size="small"></ds-button>`);
    expect(el.getAttribute('size')).toBe('small');
  });

  it('disables the inner button when disabled attribute is set', async () => {
    const el = await fixture<DsButton>(html`<ds-button label="X" disabled></ds-button>`);
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.disabled).toBe(true);
    expect(btn.getAttribute('aria-disabled')).toBe('true');
  });

  it('shows spinner element when loading', async () => {
    const el = await fixture<DsButton>(html`<ds-button label="Saving" loading></ds-button>`);
    const spinner = el.shadowRoot!.querySelector('.spinner');
    expect(spinner).toBeTruthy();
    expect(spinner!.getAttribute('aria-label')).toBe('Loading');
  });

  it('disables inner button when loading', async () => {
    const el = await fixture<DsButton>(html`<ds-button label="X" loading></ds-button>`);
    expect(el.shadowRoot!.querySelector('button')!.disabled).toBe(true);
  });

  it('fires ds-click event on activation', async () => {
    const el = await fixture<DsButton>(html`<ds-button label="Go"></ds-button>`);
    let fired = false;
    el.addEventListener('ds-click', () => { fired = true; });
    el.shadowRoot!.querySelector('button')!.click();
    expect(fired).toBe(true);
  });

  it('does not fire ds-click when disabled', async () => {
    const el = await fixture<DsButton>(html`<ds-button label="Go" disabled></ds-button>`);
    const handler = vi.fn();
    el.addEventListener('ds-click', handler);
    el.shadowRoot!.querySelector('button')!.click();
    expect(handler).not.toHaveBeenCalled();
  });

  it('does not fire ds-click when loading', async () => {
    const el = await fixture<DsButton>(html`<ds-button label="Go" loading></ds-button>`);
    const handler = vi.fn();
    el.addEventListener('ds-click', handler);
    el.shadowRoot!.querySelector('button')!.click();
    expect(handler).not.toHaveBeenCalled();
  });

  it('sets type attribute on inner button', async () => {
    const el = await fixture<DsButton>(html`<ds-button label="Submit" type="submit"></ds-button>`);
    expect(el.shadowRoot!.querySelector('button')!.type).toBe('submit');
  });
});
