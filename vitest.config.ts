import * as path from 'path';
import { defineConfig } from 'vitest/config';
import config from './vite.config';

export default defineConfig({
  ...config,
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],

    setupFiles: [path.resolve(__dirname, './src/tests/setup.ts')],
  },
});
