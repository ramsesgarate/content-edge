// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [
    'nuxt-seo-kit'
  ],
  modules: ['nuxt-icon', 'nuxt-windicss', '@nuxtjs/critters', '@nuxt/content'],
  runtimeConfig: {
    public: {
      titleSeparator: '·',
      siteUrl: 'https://content-edge.vercel.app/',
      siteName: 'Content Edge',
      siteDescription: 'Open source template for play with NuxtJs.',
      language: 'en',
    },
  },
  routeRules: {
    '/api/**': { cors: true },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/'
      ]
    }
  }
})
