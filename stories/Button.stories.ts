import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/button/ds-button.js';

const meta: Meta = {
  title: 'Leaf / ds-button',
  component: 'ds-button',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { label: 'Click me', variant: 'primary', size: 'medium', disabled: false, loading: false, type: 'button' },
  render: (args) => html`
    <ds-button
      label=${args['label']}
      variant=${args['variant']}
      size=${args['size']}
      ?disabled=${args['disabled']}
      ?loading=${args['loading']}
      type=${args['type']}
    ></ds-button>
  `,
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {};

export const Secondary: Story = { args: { variant: 'secondary' } };

export const Ghost: Story = { args: { variant: 'ghost' } };

export const Danger: Story = { args: { variant: 'danger', label: 'Delete account' } };

export const Loading: Story = { args: { loading: true, label: 'Saving...' } };

export const Disabled: Story = { args: { disabled: true } };

export const SmallSize: Story = { args: { size: 'small', label: 'Small' } };

export const LargeSize: Story = { args: { size: 'large', label: 'Large' } };

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => html`
    <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center">
      <ds-button label="Primary" variant="primary"></ds-button>
      <ds-button label="Secondary" variant="secondary"></ds-button>
      <ds-button label="Ghost" variant="ghost"></ds-button>
      <ds-button label="Danger" variant="danger"></ds-button>
      <ds-button label="Loading" loading></ds-button>
      <ds-button label="Disabled" disabled></ds-button>
    </div>
  `,
};
