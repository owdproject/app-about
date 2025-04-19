import {defineNuxtModule, createResolver, addComponentsDir, installModule, addPlugin} from '@nuxt/kit'

export default defineNuxtModule({
    meta: {
        name: 'owd-app-about',
    },
    async setup(options, nuxt) {
        const {resolve} = createResolver(import.meta.url);

        {

            // add components

            addComponentsDir({
                path: resolve("./runtime/components"),
            })

        }

        {

            // add plugins

            addPlugin(resolve('./runtime/plugin'))

        }

        {

            // configure tailwind

            await installModule('@nuxtjs/tailwindcss', {
                config: {
                    viewer: false,
                    content: {
                        files: [
                            resolve('./runtime/components/**/*.{vue,mjs,ts}'),
                        ]
                    }
                }
            })

        }

    }
})