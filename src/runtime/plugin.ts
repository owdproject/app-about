import { defineNuxtPlugin } from 'nuxt/app'
import { defineDesktopApp } from '@owdproject/core/kit/defineDesktopApp'
import configAppAbout from './app.config'

export default defineNuxtPlugin({
  name: 'desktop-app-about-register',
  async setup() {
    if (import.meta.server) return
    await defineDesktopApp(configAppAbout)
  },
})
