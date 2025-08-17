// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxt/content"],
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Yurii Myronov",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
    },
  },

  content: {
    preview: {
      api: 'https://meizuno.github.io/'
    }
  }
});
