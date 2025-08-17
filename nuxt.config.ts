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
      meta: [
        {
          name: "autor",
          content: "Yurii Myronov",
        },
        {
          name: "application-name",
          content: "Yurii Myronov",
        },
        {
          name: "description",
          content:
            "Porfolio of Yurii Myronov, a web developer specializing in Python and Nuxt.js.",
        },
        {
          name: "keywords",
          content:
            "Yurii Myronov, Programmer, Web, Backend, Frontend, Python, Django, FastAPI, Nuxt.js, Vue.js, JavaScript, HTML, CSS, Tailwind, Portfolio",
        },
      ],
      link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
    },
  },
});
