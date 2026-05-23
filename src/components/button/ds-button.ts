import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../../internals/base-element.js';

/**
 * Primary interactive trigger for user actions. All content is defined via attributes —
 * this component has no slot children.
 *
 * @element ds-button
 * @summary Use `ds-button` for any clickable action. Use `variant="prominent"` for the
 * main CTA, `accent` for a complementary highlighted action, `subtle` for secondary
 * actions, `ghost` for tertiary actions, and `danger` for irreversible destructive operations.
 *
 * @attr {string} label - Visible button text and accessible name (required)
 * @attr {'prominent' | 'accent' | 'subtle' | 'ghost' | 'danger'} [variant='prominent'] - Visual intent
 * @attr {'small' | 'medium' | 'large'} [size='medium'] - Size scale
 * @attr {boolean} [disabled=false] - Disables interaction and sets aria-disabled
 * @attr {boolean} [loading=false] - Shows a spinner; implies disabled; announces "Loading" to screen readers
 * @attr {'button' | 'submit' | 'reset'} [type='button'] - Native button type; use "submit" inside forms
 *
 * @fires ds-click - Dispatched on activation (click, Enter, Space). Not fired when disabled or loading.
 *
 * @cssproperty [--ds-button-radius=var(--ds-radius-md)] - Border radius override
 *
 * @example
 * <!-- CDN usage — single script tag, no bundler required -->
 * <script type="module" src="https://cdn.jsdelivr.net/npm/@tounsoo/ds4ai/dist/index.js"></script>
 * <ds-button label="Save changes"></ds-button>
 *
 * @example
 * <!-- Accent variant for a complementary action -->
 * <ds-button label="Upgrade plan" variant="accent"></ds-button>
 *
 * @example
 * <!-- Danger variant with small size -->
 * <ds-button label="Delete account" variant="danger" size="small"></ds-button>
 *
 * @example
 * <!-- Loading state during async operation -->
 * <ds-button label="Saving..." loading></ds-button>
 *
 * @example
 * <!-- Form submit button -->
 * <form>
 *   <ds-button label="Submit form" type="submit"></ds-button>
 * </form>
 */
@customElement('ds-button')
export class DsButton extends BaseElement {
  static styles = [
    BaseElement.styles,
    css`
      :host {
        display: inline-block;
      }

      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--ds-space-2);
        border: 1.5px solid transparent;
        border-radius: var(--ds-button-radius, var(--ds-radius-md));
        cursor: pointer;
        font-family: var(--ds-font-family-sans);
        font-weight: var(--ds-font-weight-medium);
        letter-spacing: -0.01em;
        line-height: var(--ds-line-height-tight);
        text-decoration: none;
        white-space: nowrap;
        transition:
          background-color var(--ds-duration-fast) var(--ds-easing-default),
          border-color var(--ds-duration-fast) var(--ds-easing-default),
          box-shadow var(--ds-duration-fast) var(--ds-easing-default),
          color var(--ds-duration-fast) var(--ds-easing-default);
      }

      :host([size='small']) button  { font-size: var(--ds-text-xs); padding: var(--ds-space-1) var(--ds-space-3);  min-height: 2.125rem; }
      :host([size='large']) button  { font-size: var(--ds-text-md); padding: var(--ds-space-3) var(--ds-space-6);  min-height: 3.25rem; }
      :host(:not([size])) button,
      :host([size='medium']) button { font-size: var(--ds-text-sm); padding: var(--ds-space-2) var(--ds-space-4);  min-height: 2.75rem; }

      /* prominent (default) */
      :host(:not([variant])) button,
      :host([variant='prominent']) button {
        background: var(--ds-color-action-prominent);
        color: var(--ds-color-text-on-action);
      }
      :host(:not([variant])) button:hover:not(:disabled),
      :host([variant='prominent']) button:hover:not(:disabled) {
        background: var(--ds-color-action-prominent-hover);
      }

      /* accent */
      :host([variant='accent']) button {
        background: var(--ds-color-action-accent);
        color: var(--ds-color-text-on-action);
      }
      :host([variant='accent']) button:hover:not(:disabled) {
        background: var(--ds-color-action-accent-hover);
      }

      /* subtle */
      :host([variant='subtle']) button {
        background: transparent;
        color: var(--ds-color-action-prominent);
        border-color: var(--ds-color-action-prominent);
      }
      :host([variant='subtle']) button:hover:not(:disabled) {
        background: var(--ds-color-action-prominent-subtle);
      }

      /* ghost */
      :host([variant='ghost']) button {
        background: transparent;
        color: var(--ds-color-text-primary);
      }
      :host([variant='ghost']) button:hover:not(:disabled) {
        background: var(--ds-color-surface-subtle);
      }

      /* danger */
      :host([variant='danger']) button {
        background: var(--ds-color-action-danger);
        color: var(--ds-color-text-on-action);
      }
      :host([variant='danger']) button:hover:not(:disabled) {
        background: var(--ds-color-action-danger-hover);
      }

      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .spinner {
        display: inline-block;
        width: 1em;
        height: 1em;
        border: 2px solid currentColor;
        border-top-color: transparent;
        border-radius: var(--ds-radius-full);
        animation: ds-spin var(--ds-duration-slow) linear infinite;
      }

      @keyframes ds-spin {
        to { transform: rotate(360deg); }
      }
    `,
  ];

  /** @attr */
  @property({ type: String }) label = '';

  /** @attr */
  @property({ type: String, reflect: true }) variant: 'prominent' | 'accent' | 'subtle' | 'ghost' | 'danger' = 'prominent';

  /** @attr */
  @property({ type: String, reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** @attr */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** @attr */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** @attr */
  @property({ type: String }) type: 'button' | 'submit' | 'reset' = 'button';

  private _handleClick(e: MouseEvent): void {
    if (this.disabled || this.loading) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.dispatchEvent(new CustomEvent('ds-click', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <button
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        aria-disabled=${this.disabled || this.loading ? 'true' : 'false'}
        aria-label=${this.label}
        @click=${this._handleClick}
      >
        ${this.loading
          ? html`<span class="spinner" role="status" aria-label="Loading"></span>`
          : this.label}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-button': DsButton;
  }
}
