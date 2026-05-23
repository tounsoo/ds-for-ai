import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../../internals/base-element.js';

/**
 * Semantic heading element rendering `h1`–`h6` based on the `level` attribute.
 * Visual size is controlled independently via the `size` attribute so heading
 * hierarchy is never sacrificed for aesthetics.
 *
 * @element ds-heading
 * @summary Use `ds-heading` for all page and section headings. Always set `level`
 * to match the document outline — never skip levels (e.g. h1 → h3). Use `size`
 * to control visual weight independently of hierarchy.
 *
 * @attr {1 | 2 | 3 | 4 | 5 | 6} [level=1] - HTML heading level; maps to h1–h6
 * @attr {string} text - Heading text content (required)
 * @attr {'5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm'} [size] - Visual size override;
 *   defaults to a sensible scale per level (level 1 → 4xl, level 2 → 3xl, etc.)
 * @attr {'normal' | 'medium' | 'semibold' | 'bold'} [weight='bold'] - Font weight
 * @attr {'tight' | 'normal'} [leading='tight'] - Line height
 *
 * @example
 * <!-- Page title -->
 * <ds-heading level="1" text="Dashboard"></ds-heading>
 *
 * @example
 * <!-- Section heading with size override -->
 * <ds-heading level="2" text="Recent activity" size="xl"></ds-heading>
 *
 * @example
 * <!-- Smaller heading for cards -->
 * <ds-heading level="3" text="Account settings" size="lg" weight="semibold"></ds-heading>
 */
@customElement('ds-heading')
export class DsHeading extends BaseElement {
  static styles = [
    BaseElement.styles,
    css`
      :host {
        display: block;
      }

      h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
        font-family: var(--ds-font-family-sans);
        color: var(--ds-color-text-primary);
      }

      .size-5xl { font-size: var(--ds-text-5xl); letter-spacing: -0.05em; }
      .size-4xl { font-size: var(--ds-text-4xl); letter-spacing: -0.04em; }
      .size-3xl { font-size: var(--ds-text-3xl); letter-spacing: -0.03em; }
      .size-2xl { font-size: var(--ds-text-2xl); letter-spacing: -0.02em; }
      .size-xl  { font-size: var(--ds-text-xl);  letter-spacing: -0.01em; }
      .size-lg  { font-size: var(--ds-text-lg);  }
      .size-md  { font-size: var(--ds-text-md);  }
      .size-sm  { font-size: var(--ds-text-sm);  }

      .leading-tight  { line-height: var(--ds-line-height-tight);  }
      .leading-normal { line-height: var(--ds-line-height-normal); }

      .weight-normal   { font-weight: var(--ds-font-weight-regular);  }
      .weight-medium   { font-weight: var(--ds-font-weight-medium);   }
      .weight-semibold { font-weight: var(--ds-font-weight-semibold); }
      .weight-bold     { font-weight: var(--ds-font-weight-bold);     }
    `,
  ];

  /** @attr */
  @property({ type: Number, reflect: true }) level: 1 | 2 | 3 | 4 | 5 | 6 = 1;

  /** @attr */
  @property({ type: String }) text = '';

  /** @attr */
  @property({ type: String }) size?: '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm';

  /** @attr */
  @property({ type: String }) weight: 'normal' | 'medium' | 'semibold' | 'bold' = 'bold';

  /** @attr */
  @property({ type: String }) leading: 'tight' | 'normal' = 'tight';

  private get _resolvedSize(): string {
    if (this.size) return this.size;
    const defaults: Record<number, string> = { 1: '4xl', 2: '3xl', 3: '2xl', 4: 'xl', 5: 'lg', 6: 'md' };
    return defaults[this.level] ?? 'md';
  }

  private get _classes(): string {
    return `size-${this._resolvedSize} leading-${this.leading} weight-${this.weight}`;
  }

  render() {
    const content = html`${this.text}`;
    const cls = this._classes;
    switch (this.level) {
      case 1: return html`<h1 class=${cls}>${content}</h1>`;
      case 2: return html`<h2 class=${cls}>${content}</h2>`;
      case 3: return html`<h3 class=${cls}>${content}</h3>`;
      case 4: return html`<h4 class=${cls}>${content}</h4>`;
      case 5: return html`<h5 class=${cls}>${content}</h5>`;
      default: return html`<h6 class=${cls}>${content}</h6>`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-heading': DsHeading;
  }
}
