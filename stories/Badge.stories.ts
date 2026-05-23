import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/badge/ds-badge.js';

const meta: Meta = {
  title: 'Leaf / ds-badge',
  component: 'ds-badge',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['neutral', 'prominent', 'accent', 'success', 'warning', 'error', 'decorative'] },
    size: { control: 'select', options: ['sm', 'md'] },
    label: { control: 'text' },
  },
  args: { label: 'Active', variant: 'success', size: 'md' },
  render: (args) => html`
    <ds-badge label=${args['label']} variant=${args['variant']} size=${args['size']}></ds-badge>
  `,
};

export default meta;
type Story = StoryObj;

export const Success: Story = { args: { label: 'Active', variant: 'success' } };
export const Warning: Story = { args: { label: 'Pending', variant: 'warning' } };
export const Error: Story = { args: { label: 'Failed', variant: 'error' } };
export const Prominent: Story = { args: { label: 'Design', variant: 'prominent' } };
export const Accent: Story = { args: { label: 'New', variant: 'accent' } };
export const Neutral: Story = { args: { label: 'Draft', variant: 'neutral' } };

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => html`
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
      <ds-badge label="Neutral" variant="neutral"></ds-badge>
      <ds-badge label="Prominent" variant="prominent"></ds-badge>
      <ds-badge label="Accent" variant="accent"></ds-badge>
      <ds-badge label="Success" variant="success"></ds-badge>
      <ds-badge label="Warning" variant="warning"></ds-badge>
      <ds-badge label="Error" variant="error"></ds-badge>
    </div>
  `,
};
