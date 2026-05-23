import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../../internals/base-element.js';

/**
 * Flexbox layout container for arranging children in a row or column with
 * consistent spacing. One of three structure components that accept slot children.
 *
 * @element ds-stack
 * @summary Use `ds-stack` to arrange groups of components with consistent spacing.
 * Default direction is column (vertical). For horizontal layouts, set `direction="row"`.
 * For page-level layouts with header/sidebar/footer zones, use `ds-layout` instead.
 *
 * @attr {'column' | 'row'} [direction='column'] - Flex direction
 * @attr {'1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12'} [gap='4'] - Gap using spacing scale (maps to --ds-space-*)
 * @attr {'start' | 'center' | 'end' | 'stretch' | 'baseline'} [align='stretch'] - align-items
 * @attr {'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'} [justify='start'] - justify-content
 * @attr {boolean} [wrap=false] - Allows items to wrap to the next line
 *
 * @slot - Child components to lay out
 *
 * @example
 * <!-- Vertical stack with medium gap -->
 * <ds-stack gap="4">
 *   <ds-heading level="2" text="Sign in"></ds-heading>
 *   <ds-input label="Email" type="email"></ds-input>
 *   <ds-input label="Password" type="password"></ds-input>
 *   <ds-button label="Sign in" type="submit"></ds-button>
 * </ds-stack>
 *
 * @example
 * <!-- Horizontal row with space-between -->
 * <ds-stack direction="row" justify="between" align="center">
 *   <ds-heading level="3" text="Results"></ds-heading>
 *   <ds-button label="Export" variant="secondary"></ds-button>
 * </ds-stack>
 *
 * @example
 * <!-- Wrapping tag cloud -->
 * <ds-stack direction="row" gap="2" wrap>
 *   <ds-badge label="React"></ds-badge>
 *   <ds-badge label="TypeScript"></ds-badge>
 *   <ds-badge label="Web Components"></ds-badge>
 * </ds-stack>
 */
@customElement('ds-stack')
export class DsStack extends BaseElement {
  static styles = [
    BaseElement.styles,
    css`
      :host {
        display: flex;
      }

      :host([direction='row']) { flex-direction: row; }
      :host(:not([direction])) { flex-direction: column; }
      :host([direction='column']) { flex-direction: column; }

      :host([wrap]) { flex-wrap: wrap; }

      :host([align='start'])    { align-items: flex-start; }
      :host([align='center'])   { align-items: center; }
      :host([align='end'])      { align-items: flex-end; }
      :host([align='baseline']) { align-items: baseline; }
      :host(:not([align])),
      :host([align='stretch'])  { align-items: stretch; }

      :host(:not([justify])),
      :host([justify='start'])   { justify-content: flex-start; }
      :host([justify='center'])  { justify-content: center; }
      :host([justify='end'])     { justify-content: flex-end; }
      :host([justify='between']) { justify-content: space-between; }
      :host([justify='around'])  { justify-content: space-around; }
      :host([justify='evenly'])  { justify-content: space-evenly; }

      :host([gap='1'])  { gap: var(--ds-space-1);  }
      :host([gap='2'])  { gap: var(--ds-space-2);  }
      :host([gap='3'])  { gap: var(--ds-space-3);  }
      :host(:not([gap])),
      :host([gap='4'])  { gap: var(--ds-space-4);  }
      :host([gap='5'])  { gap: var(--ds-space-5);  }
      :host([gap='6'])  { gap: var(--ds-space-6);  }
      :host([gap='8'])  { gap: var(--ds-space-8);  }
      :host([gap='10']) { gap: var(--ds-space-10); }
      :host([gap='12']) { gap: var(--ds-space-12); }
    `,
  ];

  /** @attr */
  @property({ type: String, reflect: true }) direction: 'column' | 'row' = 'column';

  /** @attr */
  @property({ type: String, reflect: true }) gap: '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' = '4';

  /** @attr */
  @property({ type: String, reflect: true }) align: 'start' | 'center' | 'end' | 'stretch' | 'baseline' = 'stretch';

  /** @attr */
  @property({ type: String, reflect: true }) justify: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' = 'start';

  /** @attr */
  @property({ type: Boolean, reflect: true }) wrap = false;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-stack': DsStack;
  }
}
