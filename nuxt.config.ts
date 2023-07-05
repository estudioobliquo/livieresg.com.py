import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  // target: 'static',
  app: {
    head: {
      title: 'livieresg.com.py-v2',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  vite: {
    plugins: [
      svgLoader({}),
    ],
  },
  runtimeConfig: {
    public: {
      // .env variables go here
    },
  },
  css: [
    '@/assets/typography.css',
    '@/assets/main.css',
  ],
  plugins: [
    // https://go.nuxtjs.dev/config-plugins
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
  ],
  image: {
    dir: 'assets',
  },
  i18n: {
    locales: [
      { code: 'es', file: 'es-ES.json' },
      { code: 'en', file: 'en-US.json' },
      { code: 'de', file: 'de-DE.json' },
      { code: 'pt', file: 'pt-PT.json' },
    ],
    defaultLocale: 'es',
    lazy: true,
    langDir: 'languages/',
  },
})
