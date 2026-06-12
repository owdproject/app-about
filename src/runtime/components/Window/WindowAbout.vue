<script setup lang="ts">
import { useRuntimeConfig } from '#imports'

defineProps<{
  window?: IWindowController
}>()

const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <Window :window="window" :content="{ centered: true }">
    <div class="about">
      <h2
        class="about__title"
        v-text="runtimeConfig.public.desktop.about.title"
      />
      <a
        class="about__link"
        :href="runtimeConfig.public.desktop.about.href"
        target="_blank"
        v-text="runtimeConfig.public.desktop.about.subtitle"
      />

      <div
        class="about__version"
        v-text="runtimeConfig.public.desktop.about.versionText"
      />

      <div class="about__powered-by">
        <ul>
          <li
            v-for="icon of runtimeConfig.public.desktop.about.icons"
            :key="icon.name"
          >
            <a v-bind="typeof icon.link === 'string' ? { href: icon.link } : icon.link">
              <Icon
                :title="icon.title"
                :name="icon.name"
                :size="icon.size"
                :style="icon.style"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Window>
</template>

<style scoped lang="scss">
.about {
  margin: 0 auto;
  text-align: center;

  &__title {
    margin: 0 0 4px;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.2;
  }

  &__link {
    display: inline-block;
    font-size: 14px;
    opacity: 0.75;
  }

  &__version {
    margin: 16px 0;
    font-size: 18px;
    opacity: 0.3;
  }

  &__powered-by {
    margin-top: 12px;
    opacity: 0.5;

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
