import { defineConfig } from "vite";
import * as path from 'path'; // Importing path for resolving paths
import zipPack from 'unplugin-zip-pack/vite'; // Importing the zip pack plugin
import zipPackConfig from "./zip-pack.config";

export default defineConfig(() => ({
  root: __dirname, // Set the root directory for Vite
  cacheDir: path.resolve(__dirname, 'node_modules/.cache/vite'), // Cache directory for Vite
  plugins: [
    // Use the zip pack plugin with the configuration imported from zip-pack.config.ts
    zipPack(zipPackConfig), 
  ],
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Output directory for the build files
    emptyOutDir: true, // Clear the output directory before building
    reportCompressedSize: true, // Report the size of the compressed files
    commonjsOptions: {
      transformMixedEsModules: true, // Allow mixing of ES modules and CommonJS modules
      // This option allows you to transform mixed ES modules and CommonJS modules, which can be useful for compatibility.
    },
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'), // Entry point for the library
      name: 'MyLibrary', // Name of the library
      formats: ['es' as const], // Output formats for the library (ES and CommonJS)
    },
    rollupOptions: {
      external: [], // Specify external dependencies to exclude from the bundle
    },
  }

}));  // Configuration for Vite