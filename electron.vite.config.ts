import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin, UserConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'

const config: UserConfig = {
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
}

export default defineConfig(config)
