import { setCustomElementsManifest } from '@storybook/web-components';
import type { Preview } from '@storybook/web-components';

import manifest from 'virtual:vite-plugin-cem/custom-elements-manifest';
import '../src/index.js';

setCustomElementsManifest(manifest);

const DARK_BG = '#030712';

const preview: Preview = {
  decorators: [
    (story, context) => {
      const bg = (context.globals as Record<string, { value?: string }>)['backgrounds']?.value;
      document.documentElement.dataset.theme = bg === DARK_BG ? 'dark' : 'light';
      return story();
    },
  ],
  parameters: {
    docs: {
      extractComponentDescription: (
        component: { description?: string },
        { notes }: { notes?: string }
      ) => notes ?? component?.description ?? '',
    },
    controls: {
      matchers: {
        color: /(color|background)/i,
        date: /date/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#030712' },
        { name: 'subtle', value: '#f9fafb' },
      ],
    },
  },
};

export default preview;
