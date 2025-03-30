<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <Window :content="{centered: true}">
    <div class="container">
      <h2 class="text-2xl font-semibold mb-1">
        Open Web Desktop
      </h2>
      <a href="https://github.com/owdproject/owd-client" target="_blank">
        github.com/owdproject/owd-client
      </a>

      <div class="version my-4 opacity-30" v-text="runtimeConfig.public.coreVersion"/>

      <div class="powered-by opacity-50">
        <ul>
          <li>
            <Icon name="simple-icons:nuxt" :size="25" style="margin-top: -1px"/>
          </li>
          <li>
            <Icon name="simple-icons:typescript" :size="18" style="margin-top: 3px"/>
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
    color: var(--v-primary);
    font-size: 14px;
    opacity: 0.75;
  }

  .version {
    font-size: 18px;
  }

  .powered-by {
    margin-top: 12px;

    ul {
      display: grid;
      grid-template-columns: 64% 18% 18%;
      margin: 0 auto;
      padding: 0 0 0 3px;
      max-width: 64px;
      line-height: 23px;
      text-align: right;
      text-transform: uppercase;
      list-style-type: none;

      li:first-child {
        text-align: left;
      }
    }
  }
}
</style>
