import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    target: "esnext"
  },

  optimizeDeps: {
    esbuildOptions: {
      target: "esnext"
    }
  },

  resolve: {
    dedupe: ['three']
  }
})