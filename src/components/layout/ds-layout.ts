import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../../internals/base-element.js';

/**
 * Page-level layout container with named slots for header, main content, optional
 * sidebar, and footer. One of three structure components that accept slot children.
 *
 * @element ds-layout
 * @summary Use `ds-layout` as the outermost wrapper for full-page layouts.
 * It provides a `header`, `main`, `sidebar`, and `footer` slot. The sidebar is
 * optional; when omitted, main fills the full width. For component-level grouping,
 * use `ds-stack` or `ds-card` instead.
 *
 * @attr {'left' | 'right'} [sidebar-position='left'] - Which side the sidebar appears on
 * @attr {'sm' | 'md' | 'lg' | 'xl' | 'full'} [max-width='xl'] - Maximum container width
 * @attr {boolean} [no-header=false] - Removes top padding reserved for the header slot
 * @attr {boolean} [no-footer=false] - Removes bottom padding reserved for the footer slot
 *
 * @slot header - Top navigation or page header
 * @slot - Main content area (default slot)
 * @slot sidebar - Optional side panel
 * @slot footer - Page footer
 *
 * @example
 * <!-- Standard two-column layout with sidebar -->
 * <ds-layout>
 *   <ds-stack slot="header" direction="row" justify="between" align="center">
 *     <ds-heading level="1" text="My App"></ds-heading>
 *     <ds-button label="Sign out" variant="ghost"></ds-button>
 *   </ds-stack>
 *   <ds-card slot="sidebar" variant="flat">
 *     <ds-text content="Navigation"></ds-text>
 *   </ds-card>
 *   <ds-stack>
 *     <ds-heading level="2" text="Dashboard"></ds-heading>
 *     <ds-text content="Welcome back!"></ds-text>
 *   </ds-stack>
 * </ds-layout>
 *
 * @example
 * <!-- Single-column layout (no sidebar) -->
 * <ds-layout max-width="md">
 *   <ds-stack gap="8">
 *     <ds-heading level="1" text="Settings"></ds-heading>
 *     <ds-card>
 *       <ds-input label="Display name"></ds-input>
 *     </ds-card>
 *   </ds-stack>
 * </ds-layout>
 */
@customElement('ds-layout')
export class DsLayout extends BaseElement {
  static styles = [
    BaseElement.styles,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background: var(--ds-color-surface-default);
      }

      .container {
        margin-inline: auto;
        padding-inline: var(--ds-space-4);
        width: 100%;
      }

      :host([max-width='sm']) .container { max-width: 640px; }
      :host([max-width='md']) .container { max-width: 768px; }
      :host(:not([max-width])) .container,
      :host([max-width='lg']) .container { max-width: 1024px; }
      :host([max-width='xl']) .container { max-width: 1280px; }
      :host([max-width='full']) .container { max-width: none; }

      .header-zone {
        border-bottom: 1px solid var(--ds-color-border-default);
        padding-block: var(--ds-space-3);
      }

      :host([no-header]) .header-zone { display: none; }

      .content-zone {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--ds-space-6);
        padding-block: var(--ds-space-6);
        align-items: start;
      }

      .has-sidebar .content-zone {
        grid-template-columns: 240px 1fr;
      }

      :host([sidebar-position='right']) .has-sidebar .content-zone {
        grid-template-columns: 1fr 240px;
      }

      :host([sidebar-position='right']) .sidebar-slot {
        order: 2;
      }

      :host([sidebar-position='right']) .main-slot {
        order: 1;
      }

      .footer-zone {
        border-top: 1px solid var(--ds-color-border-default);
        padding-block: var(--ds-space-4);
      }

      :host([no-footer]) .footer-zone { display: none; }
    `,
  ];

  /** @attr */
  @property({ type: String, attribute: 'sidebar-position', reflect: true })
  sidebarPosition: 'left' | 'right' = 'left';

  /** @attr */
  @property({ type: String, attribute: 'max-width', reflect: true })
  maxWidth: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'xl';

  /** @attr */
  @property({ type: Boolean, attribute: 'no-header', reflect: true }) noHeader = false;

  /** @attr */
  @property({ type: Boolean, attribute: 'no-footer', reflect: true }) noFooter = false;

  render() {
    return html`
      <div class="container">
        <header class="header-zone">
          <slot name="header"></slot>
        </header>

        <div class="content-zone">
          <div class="sidebar-slot">
            <slot name="sidebar"></slot>
          </div>
          <main class="main-slot">
            <slot></slot>
          </main>
        </div>

        <footer class="footer-zone">
          <slot name="footer"></slot>
        </footer>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-layout': DsLayout;
  }
}
