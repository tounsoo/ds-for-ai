import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          environment: 'jsdom',
          include: ['tests/unit/**/*.test.ts'],
          setupFiles: ['./tests/unit/setup.ts'],
        },
      },
      {
        test: {
          name: 'sr',
          environment: 'jsdom',
          include: ['tests/screenreader/**/*.sr.test.ts'],
          setupFiles: ['./tests/screenreader/setup.ts'],
        },
      },
    ],
  },
});
