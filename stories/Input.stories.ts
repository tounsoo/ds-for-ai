import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/input/ds-input.js';

const meta: Meta = {
  title: 'Leaf / ds-input',
  component: 'ds-input',
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'] },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    readonly: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    value: { control: 'text' },
  },
  args: { label: 'Email address', type: 'email', placeholder: 'you@example.com' },
  render: (args) => html`
    <ds-input
      label=${args['label']}
      type=${args['type']}
      value=${args['value'] ?? ''}
      placeholder=${args['placeholder'] ?? ''}
      hint=${args['hint'] ?? ''}
      error=${args['error'] ?? ''}
      ?required=${args['required']}
      ?disabled=${args['disabled']}
      ?readonly=${args['readonly']}
    ></ds-input>
  `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const WithHint: Story = { args: { label: 'Username', hint: '3–20 characters, letters and numbers only', type: 'text' } };
export const WithError: Story = { args: { label: 'Email', type: 'email', value: 'not-valid', error: 'Please enter a valid email address' } };
export const Required: Story = { args: { required: true } };
export const Disabled: Story = { args: { disabled: true, value: 'readonly@example.com' } };
export const Password: Story = { args: { label: 'Password', type: 'password', placeholder: 'Enter your password' } };
