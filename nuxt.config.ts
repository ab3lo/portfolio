export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxt/image',
    'vue-sonner/nuxt',
  ],

  imports: {
    presets: [
      {
        from: 'vue-sonner',
        imports: ['toast'],
      },
    ],
  },

  devtools: {
    enabled: true,
  },

  css: ['~/assets/style/main.css'],

  app: {
    baseURL: '/portfolio/',
  },

  nitro: {
    preset: 'github-pages',
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  runtimeConfig: {
    public: {
      resend: false,
    },
  },

  compatibilityDate: '2025-01-05',

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    provider: 'iconify',
  },

  ogImage: {
    zeroRuntime: true,
  },
})
