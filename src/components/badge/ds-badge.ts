import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../../internals/base-element.js';

/**
 * Small status label or category tag. Use `variant="decorative"` for purely
 * visual labels that add no information not conveyed by surrounding context.
 *
 * @element ds-badge
 * @summary Use `ds-badge` for status indicators (Active, Pending, Error), category
 * tags, or short contextual labels. Set `variant="decorative"` for badges that
 * are aria-hidden (decorative use only).
 *
 * @attr {string} label - Badge text (required)
 * @attr {'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'decorative'} [variant='neutral'] - Color and semantic intent;
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
 * <!-- Category tag -->
 * <ds-badge label="Design" variant="primary"></ds-badge>
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
      }

      :host([size='sm']) span { font-size: var(--ds-text-xs); padding: 0.125rem var(--ds-space-2); }
      :host(:not([size])) span,
      :host([size='md']) span { font-size: var(--ds-text-xs); padding: 0.1875rem var(--ds-space-2); }

      :host(:not([variant])) span,
      :host([variant='neutral']) span {
        background: var(--ds-color-surface-subtle);
        color: var(--ds-color-text-secondary);
        border: 1px solid var(--ds-color-border-default);
      }

      :host([variant='primary']) span {
        background: var(--ds-color-action-primary-subtle);
        color: var(--ds-color-action-primary);
      }

      :host([variant='success']) span {
        background: #f0fdf4;
        color: #15803d;
      }

      :host([variant='warning']) span {
        background: #fffbeb;
        color: #b45309;
      }

      :host([variant='error']) span {
        background: var(--ds-color-action-danger-subtle);
        color: var(--ds-color-action-danger);
      }

      :host([variant='decorative']) span {
        background: var(--ds-color-surface-subtle);
        color: var(--ds-color-text-disabled);
      }
    `,
  ];

  /** @attr */
  @property({ type: String }) label = '';

  /** @attr */
  @property({ type: String, reflect: true }) variant: 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'decorative' = 'neutral';

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
