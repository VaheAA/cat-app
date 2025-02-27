// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxt/image'],
  imports: {
    dirs: ['stores', 'components'],
  },
  runtimeConfig: {
    public: {
      baseApiUrl: process.env.BASE_API_URL,
      apiKey: process.env.API_KEY,
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
})
