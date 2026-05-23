import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/text/ds-text.js';

const meta: Meta = {
  title: 'Leaf / ds-text',
  component: 'ds-text',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    weight: { control: 'select', options: ['normal', 'medium', 'semibold', 'bold'] },
    color: { control: 'select', options: ['primary', 'secondary', 'disabled', 'inverse'] },
    leading: { control: 'select', options: ['tight', 'normal', 'loose'] },
    truncate: { control: 'boolean' },
    content: { control: 'text' },
  },
  args: { content: 'The quick brown fox jumps over the lazy dog.', size: 'md', weight: 'normal', color: 'primary', leading: 'normal', truncate: false },
  render: (args) => html`
    <ds-text
      content=${args['content']}
      size=${args['size']}
      weight=${args['weight']}
      color=${args['color']}
      leading=${args['leading']}
      ?truncate=${args['truncate']}
    ></ds-text>
  `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Secondary: Story = { args: { color: 'secondary', size: 'sm', content: 'Last updated 2 minutes ago' } };
export const Truncated: Story = { args: { truncate: true, content: 'This is a very long text string that will be truncated with an ellipsis at the end of the line when it overflows.' } };
