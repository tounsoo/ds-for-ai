import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/card/ds-card.js';
import '../src/components/text/ds-text.js';
import '../src/components/heading/ds-heading.js';
import '../src/components/button/ds-button.js';

const meta: Meta = {
  title: 'Structure / ds-card',
  component: 'ds-card',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['elevated', 'outlined', 'flat'] },
    padding: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    heading: { control: 'text' },
  },
  args: { heading: 'Card heading', variant: 'elevated', padding: 'md' },
  render: (args) => html`
    <ds-card heading=${args['heading'] ?? ''} variant=${args['variant']} padding=${args['padding']}>
      <ds-text content="Card body content goes here. Use the default slot for any child components."></ds-text>
      <ds-button slot="footer" label="Action" variant="secondary"></ds-button>
    </ds-card>
  `,
};

export default meta;
type Story = StoryObj;

export const Elevated: Story = { args: { variant: 'elevated' } };
export const Outlined: Story = { args: { variant: 'outlined' } };
export const Flat: Story = { args: { variant: 'flat', heading: undefined } };
export const WithFooter: Story = {
  render: () => html`
    <ds-card heading="Delete account" variant="outlined">
      <ds-text content="This action cannot be undone. All your data will be permanently removed." color="secondary"></ds-text>
      <ds-button slot="footer" label="Cancel" variant="ghost"></ds-button>
      <ds-button slot="footer" label="Delete account" variant="danger"></ds-button>
    </ds-card>
  `,
};
