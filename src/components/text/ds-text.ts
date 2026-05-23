import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../../internals/base-element.js';

/**
 * Body text component for paragraphs and inline content. All text is supplied
 * via the `content` attribute — this component has no slot children.
 *
 * @element ds-text
 * @summary Use `ds-text` for body copy, labels, and descriptive text. For headings,
 * use `ds-heading`. For status labels or tags, use `ds-badge`.
 *
 * @attr {string} content - The text to display (required)
 * @attr {'xs' | 'sm' | 'md' | 'lg' | 'xl'} [size='md'] - Font size
 * @attr {'normal' | 'medium' | 'semibold' | 'bold'} [weight='normal'] - Font weight
 * @attr {'primary' | 'secondary' | 'disabled' | 'inverse'} [color='primary'] - Semantic text color
 * @attr {boolean} [truncate=false] - Truncates overflowing text with an ellipsis
 * @attr {'tight' | 'normal' | 'loose'} [leading='normal'] - Line height
 *
 * @example
 * <!-- Standard body text -->
 * <ds-text content="Your account was updated successfully."></ds-text>
 *
 * @example
 * <!-- Smaller secondary label -->
 * <ds-text content="Last updated 2 minutes ago" size="sm" color="secondary"></ds-text>
 *
 * @example
 * <!-- Truncated single line -->
 * <ds-text content="This is a very long text that will be truncated" truncate></ds-text>
 */
@customElement('ds-text')
export class DsText extends BaseElement {
  static styles = [
    BaseElement.styles,
    css`
      :host {
        display: block;
      }

      :host([truncate]) p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      p {
        margin: 0;
        padding: 0;
        font-family: var(--ds-font-family-sans);
      }

      .size-xs { font-size: var(--ds-text-xs); }
      .size-sm { font-size: var(--ds-text-sm); }
      .size-md { font-size: var(--ds-text-md); }
      .size-lg { font-size: var(--ds-text-lg); }
      .size-xl { font-size: var(--ds-text-xl); }

      .weight-normal   { font-weight: var(--ds-font-weight-regular);  }
      .weight-medium   { font-weight: var(--ds-font-weight-medium);   }
      .weight-semibold { font-weight: var(--ds-font-weight-semibold); }
      .weight-bold     { font-weight: var(--ds-font-weight-bold);     }

      .color-primary   { color: var(--ds-color-text-primary);   }
      .color-secondary { color: var(--ds-color-text-secondary); }
      .color-disabled  { color: var(--ds-color-text-disabled);  }
      .color-inverse   { color: var(--ds-color-text-inverse);   }

      .leading-tight  { line-height: var(--ds-line-height-tight);  }
      .leading-normal { line-height: var(--ds-line-height-normal); }
      .leading-loose  { line-height: var(--ds-line-height-loose);  }
    `,
  ];

  /** @attr */
  @property({ type: String }) content = '';

  /** @attr */
  @property({ type: String, reflect: true }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /** @attr */
  @property({ type: String }) weight: 'normal' | 'medium' | 'semibold' | 'bold' = 'normal';

  /** @attr */
  @property({ type: String }) color: 'primary' | 'secondary' | 'disabled' | 'inverse' = 'primary';

  /** @attr */
  @property({ type: Boolean, reflect: true }) truncate = false;

  /** @attr */
  @property({ type: String }) leading: 'tight' | 'normal' | 'loose' = 'normal';

  render() {
    const cls = `size-${this.size} weight-${this.weight} color-${this.color} leading-${this.leading}`;
    return html`<p class=${cls}>${this.content}</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-text': DsText;
  }
}
