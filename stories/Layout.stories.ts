import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/layout/ds-layout.js';
import '../src/components/stack/ds-stack.js';
import '../src/components/heading/ds-heading.js';
import '../src/components/text/ds-text.js';
import '../src/components/button/ds-button.js';
import '../src/components/card/ds-card.js';

const meta: Meta = {
  title: 'Structure / ds-layout',
  component: 'ds-layout',
  tags: ['autodocs'],
  argTypes: {
    'sidebar-position': { control: 'select', options: ['left', 'right'] },
    'max-width': { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] },
    'no-header': { control: 'boolean' },
    'no-footer': { control: 'boolean' },
  },
  args: { 'sidebar-position': 'left', 'max-width': 'xl' },
  render: (args) => html`
    <ds-layout sidebar-position=${args['sidebar-position']} max-width=${args['max-width']} ?no-header=${args['no-header']} ?no-footer=${args['no-footer']}>
      <ds-stack slot="header" direction="row" justify="between" align="center">
        <ds-heading level="1" text="App" size="xl"></ds-heading>
        <ds-button label="Sign out" variant="ghost"></ds-button>
      </ds-stack>
      <ds-card slot="sidebar" variant="flat" padding="sm">
        <ds-text content="Sidebar navigation" color="secondary" size="sm"></ds-text>
      </ds-card>
      <ds-stack gap="6">
        <ds-heading level="2" text="Dashboard"></ds-heading>
        <ds-text content="Welcome to the design system."></ds-text>
      </ds-stack>
      <ds-text slot="footer" content="© 2026 ds4ai" size="sm" color="secondary"></ds-text>
    </ds-layout>
  `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const RightSidebar: Story = { args: { 'sidebar-position': 'right' } };
export const SingleColumn: Story = {
  name: 'Single column (no sidebar)',
  render: () => html`
    <ds-layout max-width="md" no-header>
      <ds-stack gap="8">
        <ds-heading level="1" text="Settings"></ds-heading>
        <ds-card heading="Profile" variant="outlined">
          <ds-input label="Display name"></ds-input>
          <ds-input label="Email" type="email"></ds-input>
          <ds-button slot="footer" label="Save changes"></ds-button>
        </ds-card>
      </ds-stack>
    </ds-layout>
  `,
};
