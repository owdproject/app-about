import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin({
  name: 'app-about-playground-launch',
  dependsOn: ['desktop-app-about-register'],
  setup(nuxtApp) {
    autoStartPlaygroundApps(nuxtApp, [
      { id: 'org.owdproject.about', entry: 'about', windowModel: 'main' }
    ])
  },
})
