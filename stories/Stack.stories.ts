import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/stack/ds-stack.js';
import '../src/components/button/ds-button.js';
import '../src/components/badge/ds-badge.js';
import '../src/components/heading/ds-heading.js';
import '../src/components/input/ds-input.js';

const meta: Meta = {
  title: 'Structure / ds-stack',
  component: 'ds-stack',
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['column', 'row'] },
    gap: { control: 'select', options: ['1', '2', '3', '4', '5', '6', '8', '10', '12'] },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch', 'baseline'] },
    justify: { control: 'select', options: ['start', 'center', 'end', 'between', 'around', 'evenly'] },
    wrap: { control: 'boolean' },
  },
  args: { direction: 'column', gap: '4', align: 'stretch', justify: 'start', wrap: false },
  render: (args) => html`
    <ds-stack direction=${args['direction']} gap=${args['gap']} align=${args['align']} justify=${args['justify']} ?wrap=${args['wrap']}>
      <ds-button label="First item" variant="secondary"></ds-button>
      <ds-button label="Second item" variant="secondary"></ds-button>
      <ds-button label="Third item" variant="secondary"></ds-button>
    </ds-stack>
  `,
};

export default meta;
type Story = StoryObj;

export const VerticalStack: Story = { name: 'Vertical (default)' };
export const HorizontalRow: Story = { args: { direction: 'row' } };
export const RowWithSpaceBetween: Story = {
  name: 'Row — space between',
  args: { direction: 'row', justify: 'between' },
};
export const FormLayout: Story = {
  name: 'Form layout example',
  render: () => html`
    <ds-stack gap="5" style="max-width:400px">
      <ds-heading level="2" text="Sign in"></ds-heading>
      <ds-input label="Email address" type="email" required></ds-input>
      <ds-input label="Password" type="password" required></ds-input>
      <ds-button label="Sign in" type="submit"></ds-button>
    </ds-stack>
  `,
};
