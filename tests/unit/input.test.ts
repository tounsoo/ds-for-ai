import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { DsInput } from '../../src/components/input/ds-input.js';

describe('ds-input', () => {
  it('renders a visible label element', async () => {
    const el = await fixture<DsInput>(html`<ds-input label="Email address"></ds-input>`);
    const label = el.shadowRoot!.querySelector('label')!;
    expect(label.textContent?.trim()).toContain('Email address');
  });

  it('links label to input via matching for/id', async () => {
    const el = await fixture<DsInput>(html`<ds-input label="Username"></ds-input>`);
    const label = el.shadowRoot!.querySelector('label')!;
    const input = el.shadowRoot!.querySelector('input')!;
    expect(label.getAttribute('for')).toBe(input.id);
  });

  it('sets aria-required when required', async () => {
    const el = await fixture<DsInput>(html`<ds-input label="Email" required></ds-input>`);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('aria-required')).toBe('true');
    expect(input.required).toBe(true);
  });

  it('sets aria-invalid and shows error when error attribute is set', async () => {
    const el = await fixture<DsInput>(html`<ds-input label="Email" error="Invalid email"></ds-input>`);
    const input = el.shadowRoot!.querySelector('input')!;
    const errorEl = el.shadowRoot!.querySelector('[role="alert"]')!;
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(errorEl.textContent?.trim()).toBe('Invalid email');
  });

  it('wires aria-describedby to error element id', async () => {
    const el = await fixture<DsInput>(html`<ds-input label="Email" error="Bad email"></ds-input>`);
    const input = el.shadowRoot!.querySelector('input')!;
    const errorEl = el.shadowRoot!.querySelector('[role="alert"]')!;
    expect(input.getAttribute('aria-describedby')).toContain(errorEl.id);
  });

  it('renders hint text and wires aria-describedby', async () => {
    const el = await fixture<DsInput>(html`<ds-input label="Name" hint="Use your full name"></ds-input>`);
    const hint = el.shadowRoot!.querySelector('.hint')!;
    const input = el.shadowRoot!.querySelector('input')!;
    expect(hint.textContent?.trim()).toBe('Use your full name');
    expect(input.getAttribute('aria-describedby')).toContain(hint.id);
  });

  it('disables input when disabled attribute is set', async () => {
    const el = await fixture<DsInput>(html`<ds-input label="Name" disabled></ds-input>`);
    expect(el.shadowRoot!.querySelector('input')!.disabled).toBe(true);
  });

  it('fires ds-input event on keystroke', async () => {
    const el = await fixture<DsInput>(html`<ds-input label="Search"></ds-input>`);
    const handler = vi.fn();
    el.addEventListener('ds-input', handler);
    const input = el.shadowRoot!.querySelector('input')!;
    input.value = 'hello';
    input.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('fires ds-change event on change', async () => {
    const el = await fixture<DsInput>(html`<ds-input label="Search"></ds-input>`);
    const handler = vi.fn();
    el.addEventListener('ds-change', handler);
    const input = el.shadowRoot!.querySelector('input')!;
    input.value = 'hello';
    input.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('sets input type attribute', async () => {
    const el = await fixture<DsInput>(html`<ds-input label="Password" type="password"></ds-input>`);
    expect(el.shadowRoot!.querySelector('input')!.type).toBe('password');
  });
});
