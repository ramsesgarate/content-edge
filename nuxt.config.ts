// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  nitro: {
    preset: 'vercel-edge',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})
