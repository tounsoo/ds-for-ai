import { html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BaseElement } from '../../internals/base-element.js';

let inputIdCounter = 0;

/**
 * Accessible text input with visible label and error/hint support.
 * The label is always visible — `aria-label` is never used as a substitute.
 *
 * @element ds-input
 * @summary Use `ds-input` for any single-line text input. The `label` attribute
 * is required and renders a visible `<label>` element. Use `error` to show
 * validation messages and `hint` for help text. Both are announced to screen readers.
 *
 * @attr {string} label - Visible label text (required; rendered as <label>, not aria-label)
 * @attr {'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'} [type='text'] - Input type
 * @attr {string} [value=''] - Current input value
 * @attr {string} [placeholder] - Placeholder text
 * @attr {boolean} [required=false] - Marks field as required; adds aria-required
 * @attr {boolean} [disabled=false] - Disables the input
 * @attr {boolean} [readonly=false] - Makes the input read-only
 * @attr {string} [error] - Error message; shown in red below the input; announced via role="alert"
 * @attr {string} [hint] - Help text; shown below the input; announced via aria-describedby
 * @attr {string} [autocomplete] - Maps to native autocomplete attribute
 * @attr {number} [maxlength] - Maximum character length
 *
 * @fires ds-input - Dispatched on every keystroke. Detail: `{ value: string }`
 * @fires ds-change - Dispatched when value is committed (blur or Enter). Detail: `{ value: string }`
 *
 * @example
 * <!-- Basic email input -->
 * <ds-input label="Email address" type="email" required></ds-input>
 *
 * @example
 * <!-- Input with hint -->
 * <ds-input label="Username" hint="3–20 characters, letters and numbers only"></ds-input>
 *
 * @example
 * <!-- Input with validation error -->
 * <ds-input label="Email" type="email" value="invalid" error="Please enter a valid email address"></ds-input>
 *
 * @example
 * <!-- Password field -->
 * <ds-input label="Password" type="password" required autocomplete="current-password"></ds-input>
 */
@customElement('ds-input')
export class DsInput extends BaseElement {
  static styles = [
    BaseElement.styles,
    css`
      :host {
        display: block;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: var(--ds-space-1);
      }

      label {
        font-size: var(--ds-text-sm);
        font-weight: var(--ds-font-weight-medium);
        color: var(--ds-color-text-primary);
        font-family: var(--ds-font-family-sans);
      }

      .required-mark {
        color: var(--ds-color-action-danger);
        margin-inline-start: var(--ds-space-1);
        aria-hidden: true;
      }

      input {
        width: 100%;
        padding: var(--ds-space-2) var(--ds-space-3);
        font-size: var(--ds-text-sm);
        font-family: var(--ds-font-family-sans);
        line-height: var(--ds-line-height-tight);
        color: var(--ds-color-text-primary);
        background: var(--ds-input-glass-bg);
        border: 1px solid var(--ds-input-glass-border);
        border-radius: var(--ds-radius-lg);
        outline: none;
        -webkit-backdrop-filter: url(#ds-glass) blur(0.4px) contrast(1.08);
        backdrop-filter: url(#ds-glass) blur(0.4px) contrast(1.08);
        box-shadow:
          inset 0 1.5px 0 rgba(255, 255, 255, 0.55),
          inset 0 -1px 0 rgba(0, 0, 0, 0.10),
          inset 0 2px 6px rgba(0, 0, 0, 0.06);
        transition:
          border-color var(--ds-duration-fast) var(--ds-easing-default),
          box-shadow var(--ds-duration-fast) var(--ds-easing-default);
      }

      input::placeholder {
        color: var(--ds-color-text-disabled);
      }

      input:focus {
        border-color: var(--ds-color-border-focus);
        box-shadow:
          0 0 0 3px rgb(139 92 246 / 0.2),
          inset 0 1.5px 0 rgba(255, 255, 255, 0.55),
          inset 0 -1px 0 rgba(0, 0, 0, 0.10),
          inset 0 2px 6px rgba(0, 0, 0, 0.06);
      }

      :host([error]) input {
        border-color: var(--ds-color-action-danger);
      }

      :host([error]) input:focus {
        border-color: var(--ds-color-action-danger);
        box-shadow: 0 0 0 var(--ds-focus-ring-width) color-mix(in srgb, var(--ds-color-action-danger) 30%, transparent);
      }

      input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: var(--ds-color-surface-subtle);
      }

      .hint {
        font-size: var(--ds-text-xs);
        color: var(--ds-color-text-secondary);
        font-family: var(--ds-font-family-sans);
      }

      .error-msg {
        font-size: var(--ds-text-xs);
        color: var(--ds-color-action-danger);
        font-family: var(--ds-font-family-sans);
      }
    `,
  ];

  @state() private _inputId = `ds-input-${++inputIdCounter}`;

  /** @attr */
  @property({ type: String }) label = '';

  /** @attr */
  @property({ type: String, reflect: true }) type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' = 'text';

  /** @attr */
  @property({ type: String }) value = '';

  /** @attr */
  @property({ type: String }) placeholder?: string;

  /** @attr */
  @property({ type: Boolean, reflect: true }) required = false;

  /** @attr */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** @attr */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /** @attr */
  @property({ type: String, reflect: true }) error?: string;

  /** @attr */
  @property({ type: String }) hint?: string;

  /** @attr */
  @property({ type: String }) autocomplete?: string;

  /** @attr */
  @property({ type: Number }) maxlength?: number;

  private _handleInput(e: InputEvent): void {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent('ds-input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true,
    }));
  }

  private _handleChange(e: Event): void {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent('ds-change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    const hintId = this.hint ? `${this._inputId}-hint` : undefined;
    const errorId = this.error ? `${this._inputId}-error` : undefined;
    const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

    return html`
      <div class="field">
        <label for=${this._inputId}>
          ${this.label}
          ${this.required ? html`<span class="required-mark" aria-hidden="true">*</span>` : ''}
        </label>

        <input
          id=${this._inputId}
          type=${this.type}
          .value=${this.value}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          aria-required=${this.required ? 'true' : 'false'}
          aria-invalid=${this.error ? 'true' : 'false'}
          aria-describedby=${describedBy ?? ''}
          placeholder=${this.placeholder ?? ''}
          autocomplete=${this.autocomplete ?? ''}
          maxlength=${this.maxlength ?? ''}
          @input=${this._handleInput}
          @change=${this._handleChange}
        />

        ${this.hint && !this.error
          ? html`<span id=${hintId} class="hint">${this.hint}</span>`
          : ''}

        ${this.error
          ? html`<span id=${errorId} role="alert" class="error-msg">${this.error}</span>`
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-input': DsInput;
  }
}
