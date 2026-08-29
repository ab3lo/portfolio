export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/devtools'],
  nitro: {
    preset: 'github-pages',
  },
  app: {
    baseURL: '/portfolio/',
  },
})
