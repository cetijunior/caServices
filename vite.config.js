import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins:
    [tailwindcss(), react(),],
  assetsInclude: ['**/*.glb'],
  resolve: {
    alias: {
      'react': 'react',
      'react-dom': 'react-dom'
    }
  }
})
