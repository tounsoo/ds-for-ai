import { LitElement, css, type CSSResultGroup } from 'lit';

export abstract class BaseElement extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      box-sizing: border-box;
      font-family: var(--ds-font-family-sans, system-ui, sans-serif);
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    :focus-visible {
      outline: var(--ds-focus-ring-width, 2px) solid var(--ds-focus-ring-color, #4f46e5);
      outline-offset: var(--ds-focus-ring-offset, 2px);
      border-radius: var(--ds-radius-sm, 0.25rem);
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;
}
