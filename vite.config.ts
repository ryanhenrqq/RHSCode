import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/RHSCode/",
  resolve: {
    alias : {
      '@ico': path.resolve(__dirname, './src/res/ico'),
      '@logo': path.resolve(__dirname, './src/res/logo'),
      '@img': path.resolve(__dirname, './src/res/img')
    }
  }
})
