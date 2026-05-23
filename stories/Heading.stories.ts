import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/heading/ds-heading.js';

const meta: Meta = {
  title: 'Leaf / ds-heading',
  component: 'ds-heading',
  tags: ['autodocs'],
  argTypes: {
    level: { control: 'select', options: [1, 2, 3, 4, 5, 6] },
    size: { control: 'select', options: ['4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm', undefined] },
    weight: { control: 'select', options: ['normal', 'medium', 'semibold', 'bold'] },
    leading: { control: 'select', options: ['tight', 'normal'] },
    text: { control: 'text' },
  },
  args: { level: 1, text: 'Page title', weight: 'bold', leading: 'tight' },
  render: (args) => html`
    <ds-heading
      level=${args['level']}
      text=${args['text']}
      size=${args['size'] ?? ''}
      weight=${args['weight']}
      leading=${args['leading']}
    ></ds-heading>
  `,
};

export default meta;
type Story = StoryObj;

export const H1: Story = { args: { level: 1, text: 'Page heading (h1)' } };
export const H2: Story = { args: { level: 2, text: 'Section heading (h2)' } };
export const H3: Story = { args: { level: 3, text: 'Subsection heading (h3)' } };

export const TypeScale: Story = {
  name: 'Full type scale',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1rem">
      <ds-heading level="1" text="Heading 1 — default 4xl"></ds-heading>
      <ds-heading level="2" text="Heading 2 — default 3xl"></ds-heading>
      <ds-heading level="3" text="Heading 3 — default 2xl"></ds-heading>
      <ds-heading level="4" text="Heading 4 — default xl"></ds-heading>
      <ds-heading level="5" text="Heading 5 — default lg"></ds-heading>
      <ds-heading level="6" text="Heading 6 — default md"></ds-heading>
    </div>
  `,
};
