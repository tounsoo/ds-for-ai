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
        border: 1px solid transparent;
        border-radius: var(--ds-button-radius, var(--ds-radius-lg));
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
          color var(--ds-duration-fast) var(--ds-easing-default),
          transform 120ms cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      button:not(:disabled):hover  { transform: translateY(-1.5px); }
      button:not(:disabled):active { transform: translateY(0); }

      :host([size='small']) button  { font-size: var(--ds-text-sm); padding: var(--ds-space-1) var(--ds-space-3);  min-height: 2.125rem; }
      :host([size='large']) button  { font-size: var(--ds-text-md); padding: var(--ds-space-3) var(--ds-space-6);  min-height: 3.25rem; }
      :host(:not([size])) button,
      :host([size='medium']) button { font-size: var(--ds-text-sm); padding: var(--ds-space-2) var(--ds-space-4);  min-height: 2.75rem; }

      /* prominent (default) — polished glass-solid */
      :host(:not([variant])) button,
      :host([variant='prominent']) button {
        background: linear-gradient(158deg,
          color-mix(in srgb, var(--ds-color-action-prominent) 82%, white) 0%,
          var(--ds-color-action-prominent) 68%);
        color: var(--ds-color-action-prominent-fg);
        border-color: rgba(255, 255, 255, 0.14);
        box-shadow:
          inset 0 1.5px 0 rgba(255, 255, 255, 0.45),
          inset 0 -1px 0 rgba(0, 0, 0, 0.28),
          0 5px 18px rgba(0, 0, 0, 0.35),
          0 2px 5px rgba(0, 0, 0, 0.20);
      }
      :host(:not([variant])) button:hover:not(:disabled),
      :host([variant='prominent']) button:hover:not(:disabled) {
        background: linear-gradient(158deg,
          color-mix(in srgb, var(--ds-color-action-prominent-hover) 82%, white) 0%,
          var(--ds-color-action-prominent-hover) 68%);
        box-shadow:
          inset 0 1.5px 0 rgba(255, 255, 255, 0.48),
          inset 0 -1px 0 rgba(0, 0, 0, 0.28),
          0 8px 24px rgba(0, 0, 0, 0.40),
          0 2px 6px rgba(0, 0, 0, 0.22);
      }

      /* accent — polished violet glass-solid */
      :host([variant='accent']) button {
        background: linear-gradient(158deg,
          color-mix(in srgb, var(--ds-color-action-accent) 78%, white) 0%,
          var(--ds-color-action-accent) 68%);
        color: var(--ds-color-text-on-action);
        border-color: rgba(255, 255, 255, 0.24);
        box-shadow:
          inset 0 1.5px 0 rgba(255, 255, 255, 0.55),
          inset 0 -1px 0 rgba(0, 0, 0, 0.10),
          0 5px 24px color-mix(in srgb, var(--ds-color-action-accent) 55%, transparent),
          0 2px 5px rgba(0, 0, 0, 0.18);
      }
      :host([variant='accent']) button:hover:not(:disabled) {
        box-shadow:
          inset 0 1.5px 0 rgba(255, 255, 255, 0.55),
          inset 0 -1px 0 rgba(0, 0, 0, 0.10),
          0 8px 28px color-mix(in srgb, var(--ds-color-action-accent) 65%, transparent),
          0 2px 6px rgba(0, 0, 0, 0.18);
      }

      /* subtle — frosted optical glass */
      :host([variant='subtle']) button {
        -webkit-backdrop-filter: url(#ds-glass) blur(0.4px) contrast(1.12);
        backdrop-filter: url(#ds-glass) blur(0.4px) contrast(1.12);
        background: var(--ds-glass-surface-bg);
        color: var(--ds-color-action-prominent);
        border-color: var(--ds-glass-surface-border);
        box-shadow:
          inset 0 1.5px 0 var(--ds-glass-surface-spec),
          inset 0 -1px 0 rgba(0, 0, 0, 0.18),
          0 4px 16px rgba(0, 0, 0, 0.18);
      }
      :host([variant='subtle']) button:hover:not(:disabled) {
        background: color-mix(in srgb, var(--ds-glass-surface-bg) 100%, rgba(255,255,255,0.08));
      }

      /* ghost — lighter optical glass */
      :host([variant='ghost']) button {
        -webkit-backdrop-filter: url(#ds-glass) blur(0.4px) contrast(1.12);
        backdrop-filter: url(#ds-glass) blur(0.4px) contrast(1.12);
        background: var(--ds-glass-ghost-bg);
        color: var(--ds-color-text-primary);
        border-color: var(--ds-glass-ghost-border);
        box-shadow:
          inset 0 1.5px 0 rgba(255, 255, 255, 0.45),
          inset 0 -1px 0 rgba(0, 0, 0, 0.12),
          0 2px 8px rgba(0, 0, 0, 0.10);
      }
      :host([variant='ghost']) button:hover:not(:disabled) {
        background: var(--ds-glass-surface-bg);
      }

      /* danger — polished red glass-solid */
      :host([variant='danger']) button {
        background: linear-gradient(158deg,
          color-mix(in srgb, var(--ds-color-action-danger) 80%, white) 0%,
          var(--ds-color-action-danger) 68%);
        color: var(--ds-color-text-on-action);
        border-color: rgba(255, 255, 255, 0.20);
        box-shadow:
          inset 0 1.5px 0 rgba(255, 255, 255, 0.50),
          inset 0 -1px 0 rgba(0, 0, 0, 0.10),
          0 5px 20px color-mix(in srgb, var(--ds-color-action-danger) 50%, transparent),
          0 2px 5px rgba(0, 0, 0, 0.18);
      }
      :host([variant='danger']) button:hover:not(:disabled) {
        box-shadow:
          inset 0 1.5px 0 rgba(255, 255, 255, 0.50),
          inset 0 -1px 0 rgba(0, 0, 0, 0.10),
          0 8px 24px color-mix(in srgb, var(--ds-color-action-danger) 62%, transparent),
          0 2px 6px rgba(0, 0, 0, 0.18);
      }

      button:disabled {
        opacity: 0.45;
        cursor: not-allowed;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
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
