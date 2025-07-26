import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/cd-highlight.ts', // Entry point for your component
      name: 'CdHighlight',
      fileName: (format) => `cd-highlight.${format}.js`, // Output file name
      formats: ['es', 'umd'] // ESM and UMD formats
    },
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false,
        preserve_annotations: false
      },
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      },
      mangle: {
        toplevel: true
      },
      keep_fnames: false
    },
    outDir: 'dist', // Output directory
    emptyOutDir: true
  }
})
