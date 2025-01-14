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
  modules: ['@pinia/nuxt', '@nuxt/eslint'],
  imports: {
    dirs: ['stores'],
  },
  runtimeConfig: {
    public: {
      baseApiUrl: process.env.BASE_API_URL,
      apiKey: process.env.API_KEY,
    },
  },
})
