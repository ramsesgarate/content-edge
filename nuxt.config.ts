// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-icon', 'nuxt-windicss', '@nuxtjs/critters', '@nuxt/content'],
  routeRules: {
    '/blog/**': { swr: true },
    '/api/**': { cors: true },
  },
  nitro: {
    preset: 'vercel-edge',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml']
    }
  }
})
