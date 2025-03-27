<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <Window :content="{centered: true}">
    <div class="container">
      <h2>
        Open Web Desktop
      </h2>
      <a href="https://github.com/owdproject/owd-client" target="_blank">
        github.com/owdproject/owd-client
      </a>

      <div class="version" v-text="runtimeConfig.public.coreVersion"/>

      <div class="powered-by">
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

  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  a {
    color: var(--v-primary);
    font-size: 14px;
    opacity: 0.75;
  }

  .version {
    font-size: 18px;
    opacity: 0.25;
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
      opacity: 0.4;
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
