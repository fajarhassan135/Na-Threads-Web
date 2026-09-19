import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'figma:asset': fileURLToPath(new URL('./src/assets', import.meta.url))
    }
  },
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
          'supabase': ['@supabase/supabase-js']
        }
      }
    },
    // Enable minification (using esbuild - faster and built-in)
    minify: 'esbuild',
    // Remove console.log in production
    esbuild: {
      drop: ['console', 'debugger']
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000
  },
  // Optimize asset handling
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
  assetsInlineLimit: 4096, // Inline small images as base64
  // Enable faster HMR
  server: {
    hmr: {
      overlay: false
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
    // Pre-bundle optimization
    esbuildOptions: {
      target: 'es2020'
    }
  }
})
