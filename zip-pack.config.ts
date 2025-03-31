import { Options } from "unplugin-zip-pack/types";
import * as path from 'path'; // Ensure to import `path` if you're using Node.js

export default {
  // Specify the input directory to zip. This is where the files to be zipped are located.
  in: './dist',

  // This is the name of the output zip file. It can be a relative or absolute path.
  // Note: If `out` is a relative path, it will be resolved against the current working directory.
  out: path.resolve(__dirname, 'output.zip'), // Ensure to import `path` at the top of your file if using Node.js

  // This is the path separator used in the zip file. It can be '/', '\\', or any other string.
  sep: '\\',

  // This function allows you to filter which files to include in the zip file.
  // Return `true` to include the file or `false` to exclude it.
  // For example, you can exclude certain file types or specific files based on your criteria.
  // Here, we include all files by default. You can customize this logic as needed.
  filter: (_value: string, _index?: number, _array?: string[]) => {
    
    // Example: Exclude files with `.tmp` extension
    if (_value.endsWith('.tmp')) {
      return false; // Exclude temporary files
    };

    // You can add more conditions here to filter files based on your requirements.

    return true; // Include all files by default
  },

  // Set to `true` to enable the plugin. Set to `false` to disable it.
  // Note: When `enabled` is set to `false`, the plugin will not run, and no zip file will be created.
  enabled: true,

  // Hook functions run pre/post compress. (if `enabled` is set to false, hooks won't run.)
  // hooks?: {
  //   pre?: Promise;
  //   post?: Promise;
  // }

} as Options;