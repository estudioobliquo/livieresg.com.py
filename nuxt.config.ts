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
    pageTransition: { name: 'opacity', mode: 'in-out' },
    layoutTransition: { name: 'opacity', mode: 'in-out' },
  },
  vite: {
    plugins: [
      svgLoader({}),
    ],
  },
  runtimeConfig: {
    public: {
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
    '@pinia/nuxt',
  ],
  image: {
    domains: [ 'localhost:3000', 'livieresg.com.py', 'dynamic-sopapillas-48b9e7.netlify.app' ],
    screens: {
      xs: 320,
      sm: 470,
      md: 720,
      lg: 1000,
      xl: 1300,
      xxl: 1500,
    },
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
    compilation: {
      strictMessage: false,
    },
  },
})
