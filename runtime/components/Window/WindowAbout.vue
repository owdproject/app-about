<script setup lang="ts">
import { useRuntimeConfig, useNuxtApp } from 'nuxt/app'

const runtimeConfig = useRuntimeConfig()
const nuxtApp = useNuxtApp()
</script>

<template>
  <Window :content="{ centered: true }">
    <div class="container">
      <h2 class="text-2xl font-semibold mb-1">Open Web Desktop</h2>
      <a href="https://github.com/owdproject/client" target="_blank">
        github.com/owdproject/client
      </a>

      <div class="version my-4 opacity-30">
        v{{ runtimeConfig.public.coreVersion }} on Nuxt
        {{ nuxtApp.versions.nuxt }}
      </div>

      <div class="powered-by opacity-50">
        <ul>
          <li>
            <Icon
              title="Vue.js"
              name="simple-icons:vuedotjs"
              :size="18"
              style="margin: 3px -5px 0 0"
            />
          </li>
          <li>
            <Icon
              title="Nuxt.js"
              name="simple-icons:nuxt"
              :size="25"
              style="margin-top: -1px"
            />
          </li>
          <li>
            <Icon
              title="TypeScript"
              name="simple-icons:typescript"
              :size="18"
              style="margin-top: 3px"
            />
          </li>
          <li>
            <Icon
              title="PrimeVue"
              name="simple-icons:primevue"
              :size="18"
              style="margin-top: 3px"
            />
          </li>
          <li>
            <Icon
              title="Tailwind CSS"
              name="simple-icons:tailwindcss"
              :size="18"
              style="margin-top: 3px"
            />
          </li>
        </ul>
      </div>
    </div>
  </Window>
</template>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  text-align: center;

  a {
    font-size: 14px;
    opacity: 0.75;
  }

  .version {
    font-size: 18px;
  }

  .powered-by {
    margin-top: 12px;

    ul {
      display: flex;
      margin: 0 auto;
      max-width: min-content;
      line-height: 23px;
      text-align: right;
      text-transform: uppercase;
      list-style-type: none;

      li {
        margin: 0 8px;
      }
    }
  }
}
</style>
