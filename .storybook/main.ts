import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/pages/**/*.mdx',
    '../stories/**/*.stories.ts',
  ],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Overview',
  },
  viteFinal: async (config) => ({
    ...config,
    base: process.env.CI ? '/ds-for-ai/' : '/',
  }),
};

export default config;
