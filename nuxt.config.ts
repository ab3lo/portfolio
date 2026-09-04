export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
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
    enabled: false,
  },

  css: ['~/assets/style/main.css'],

  app: {
    baseURL: '/portfolio/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/portfolio/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/portfolio/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/portfolio/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/portfolio/apple-touch-icon.png' },
        { rel: 'manifest', href: '/portfolio/site.webmanifest' },
        { rel: 'preconnect', href: 'https://avatars.githubusercontent.com' },
      ],
    },
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
