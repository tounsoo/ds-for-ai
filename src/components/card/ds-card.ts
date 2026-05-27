import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../../internals/base-element.js';

/**
 * Surface container that groups related content. One of three structure components
 * that accept slot children. Use the default slot for body content and the `footer`
 * slot for action rows.
 *
 * @element ds-card
 * @summary Use `ds-card` to visually group related content into a contained surface.
 * Place `ds-text`, `ds-heading`, `ds-button`, and `ds-stack` components inside.
 * Use the `footer` slot for primary actions. Use `variant="outlined"` for less visual
 * weight, `variant="flat"` for inline sections.
 *
 * @attr {string} [heading] - Optional card heading rendered above the default slot
 * @attr {'elevated' | 'outlined' | 'flat'} [variant='elevated'] - Visual style
 * @attr {'sm' | 'md' | 'lg' | 'none'} [padding='md'] - Internal padding scale
 *
 * @slot - Primary body content
 * @slot footer - Action row at the bottom of the card (e.g. ds-button elements)
 *
 * @example
 * <!-- Basic card with heading and footer action -->
 * <ds-card heading="Account summary">
 *   <ds-text content="Your plan renews on June 1, 2026."></ds-text>
 *   <ds-button slot="footer" label="Manage plan" variant="secondary"></ds-button>
 * </ds-card>
 *
 * @example
 * <!-- Outlined card without heading -->
 * <ds-card variant="outlined" padding="lg">
 *   <ds-heading level="3" text="Notifications"></ds-heading>
 *   <ds-text content="You have 3 unread messages." color="secondary"></ds-text>
 * </ds-card>
 *
 * @example
 * <!-- Flat card for inline sections -->
 * <ds-card variant="flat" padding="sm">
 *   <ds-text content="Note: changes take effect immediately."></ds-text>
 * </ds-card>
 */
@customElement('ds-card')
export class DsCard extends BaseElement {
  static styles = [
    BaseElement.styles,
    css`
      :host {
        display: block;
      }

      article {
        border-radius: var(--ds-radius-xl);
        overflow: hidden;
        -webkit-backdrop-filter: url(#ds-glass) blur(0.6px) contrast(1.08);
        backdrop-filter: url(#ds-glass) blur(0.6px) contrast(1.08);
        background: var(--ds-card-glass-bg);
        border: 1px solid var(--ds-card-glass-border);
        box-shadow:
          inset 0 1.5px 0 var(--ds-card-glass-spec),
          inset 0 -1px 0 rgba(0, 0, 0, 0.12),
          0 12px 40px rgba(0, 0, 0, 0.18),
          0 4px 14px rgba(0, 0, 0, 0.10);
      }

      :host([variant='elevated']) article,
      :host(:not([variant])) article {
        box-shadow:
          inset 0 1.5px 0 var(--ds-card-glass-spec),
          inset 0 -1px 0 rgba(0, 0, 0, 0.12),
          0 16px 48px rgba(0, 0, 0, 0.22),
          0 4px 16px rgba(0, 0, 0, 0.12);
      }

      :host([variant='outlined']) article {
        border: 1.5px solid var(--ds-card-glass-border);
        box-shadow: inset 0 1.5px 0 var(--ds-card-glass-spec);
      }

      :host([variant='flat']) article {
        background: color-mix(in srgb, var(--ds-card-glass-bg) 70%, transparent);
        box-shadow: none;
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: var(--ds-space-3);
      }

      :host([padding='none']) .body { padding: 0; }
      :host([padding='sm'])   .body { padding: var(--ds-space-3); }
      :host(:not([padding])) .body,
      :host([padding='md'])   .body { padding: var(--ds-space-5); }
      :host([padding='lg'])   .body { padding: var(--ds-space-8); }

      .card-heading {
        font-family: var(--ds-font-family-sans);
        font-size: var(--ds-text-md);
        font-weight: var(--ds-font-weight-semibold);
        color: var(--ds-color-text-primary);
        margin: 0;
        padding: 0;
      }

      .footer {
        display: flex;
        gap: var(--ds-space-3);
        align-items: center;
        justify-content: flex-end;
        padding: var(--ds-space-3) var(--ds-space-5);
        border-top: 1px solid color-mix(in srgb, currentColor 10%, transparent);
      }

      .footer:empty {
        display: none;
      }
    `,
  ];

  /** @attr */
  @property({ type: String }) heading?: string;

  /** @attr */
  @property({ type: String, reflect: true }) variant: 'elevated' | 'outlined' | 'flat' = 'elevated';

  /** @attr */
  @property({ type: String, reflect: true }) padding: 'sm' | 'md' | 'lg' | 'none' = 'md';

  render() {
    return html`
      <article>
        <div class="body">
          ${this.heading ? html`<p class="card-heading">${this.heading}</p>` : ''}
          <slot></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-card': DsCard;
  }
}
