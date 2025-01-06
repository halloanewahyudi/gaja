// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/style.css'],
  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    configPath: './tailwind.config.js'
  
  }
})