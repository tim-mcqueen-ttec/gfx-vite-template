import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['lib/**/*.ts'], // Include source files for testing, adjust the path as needed
    globals: true, // Enable global variables like `import.meta.vitest`
  }
});