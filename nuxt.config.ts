// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-icon', 'nuxt-windicss', '@nuxtjs/critters', '@nuxt/content'],
  routeRules: {
    '/blog/**': { swr: 360 },
    '/api/**': { cors: true },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml']
    }
  }
})
