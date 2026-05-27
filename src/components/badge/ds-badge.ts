import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../../internals/base-element.js';

/**
 * Small status label or category tag. Use `variant="decorative"` for purely
 * visual labels that add no information not conveyed by surrounding context.
 *
 * @element ds-badge
 * @summary Use `ds-badge` for status indicators (Active, Pending, Error), category
 * tags, or short contextual labels. Use `prominent` for primary category tags,
 * `accent` for highlighted/featured tags, and `decorative` for aria-hidden badges.
 *
 * @attr {string} label - Badge text (required)
 * @attr {'neutral' | 'prominent' | 'accent' | 'success' | 'warning' | 'error' | 'decorative'} [variant='neutral'] - Color and semantic intent;
 *   `decorative` hides the badge from assistive technology
 * @attr {'sm' | 'md'} [size='md'] - Size scale
 *
 * @example
 * <!-- Status badge -->
 * <ds-badge label="Active" variant="success"></ds-badge>
 *
 * @example
 * <!-- Error state -->
 * <ds-badge label="Failed" variant="error"></ds-badge>
 *
 * @example
 * <!-- Primary category tag -->
 * <ds-badge label="Design" variant="prominent"></ds-badge>
 *
 * @example
 * <!-- Highlighted/featured tag -->
 * <ds-badge label="New" variant="accent"></ds-badge>
 *
 * @example
 * <!-- Decorative (visually hidden from screen readers) -->
 * <ds-badge label="●" variant="decorative"></ds-badge>
 */
@customElement('ds-badge')
export class DsBadge extends BaseElement {
  static styles = [
    BaseElement.styles,
    css`
      :host {
        display: inline-block;
      }

      span {
        display: inline-flex;
        align-items: center;
        border-radius: var(--ds-radius-full);
        font-family: var(--ds-font-family-sans);
        font-weight: var(--ds-font-weight-medium);
        line-height: var(--ds-line-height-tight);
        white-space: nowrap;
        -webkit-backdrop-filter: url(#ds-glass) blur(0.4px) contrast(1.10);
        backdrop-filter: url(#ds-glass) blur(0.4px) contrast(1.10);
        box-shadow:
          inset 0 1.5px 0 rgba(255, 255, 255, 0.50),
          inset 0 -1px 0 rgba(0, 0, 0, 0.08),
          0 1px 4px rgba(0, 0, 0, 0.10);
      }

      :host([size='sm']) span { font-size: var(--ds-text-xs); padding: 0.125rem var(--ds-space-2); }
      :host(:not([size])) span,
      :host([size='md']) span { font-size: var(--ds-text-sm); padding: 0.25rem var(--ds-space-3); }

      :host(:not([variant])) span,
      :host([variant='neutral']) span {
        background: var(--ds-glass-ghost-bg);
        color: var(--ds-color-text-secondary);
        border: 1px solid var(--ds-glass-ghost-border);
      }

      :host([variant='prominent']) span {
        background: var(--ds-color-action-prominent-subtle);
        color: var(--ds-color-action-prominent);
        border: 1px solid color-mix(in srgb, var(--ds-color-action-prominent) 15%, transparent);
      }

      :host([variant='accent']) span {
        background: var(--ds-color-action-accent-subtle);
        color: var(--ds-color-action-accent);
        border: 1px solid color-mix(in srgb, var(--ds-color-action-accent) 22%, transparent);
      }

      :host([variant='success']) span {
        background: rgba(34, 197, 94, 0.12);
        color: #15803d;
        border: 1px solid rgba(34, 197, 94, 0.22);
      }

      :host([variant='warning']) span {
        background: rgba(180, 83, 9, 0.10);
        color: #b45309;
        border: 1px solid rgba(180, 83, 9, 0.20);
      }

      :host([variant='error']) span {
        background: rgba(185, 28, 28, 0.10);
        color: #b91c1c;
        border: 1px solid rgba(185, 28, 28, 0.20);
      }

      :host([variant='decorative']) span {
        background: var(--ds-glass-ghost-bg);
        color: var(--ds-color-text-disabled);
        border: 1px solid var(--ds-glass-ghost-border);
      }
    `,
  ];

  /** @attr */
  @property({ type: String }) label = '';

  /** @attr */
  @property({ type: String, reflect: true }) variant: 'neutral' | 'prominent' | 'accent' | 'success' | 'warning' | 'error' | 'decorative' = 'neutral';

  /** @attr */
  @property({ type: String, reflect: true }) size: 'sm' | 'md' = 'md';

  render() {
    const isDecorative = this.variant === 'decorative';
    return html`
      <span
        role=${isDecorative ? 'presentation' : 'status'}
        aria-hidden=${isDecorative ? 'true' : 'false'}
      >${this.label}</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-badge': DsBadge;
  }
}
