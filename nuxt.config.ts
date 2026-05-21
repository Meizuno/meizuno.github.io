// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/sitemap",
  ],
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Yurii Myronov",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "author",
          content: "Yurii Myronov",
        },
        {
          name: "application-name",
          content: "Yurii Myronov",
        },
        {
          name: "description",
          content:
            "Portfolio of Yurii Myronov, a full-stack web developer specializing in Python (Django, FastAPI) and Nuxt.js.",
        },
        {
          name: "keywords",
          content:
            "Yurii Myronov, Programmer, Web, Backend, Frontend, Python, Django, FastAPI, Nuxt.js, Vue.js, JavaScript, HTML, CSS, Tailwind, Portfolio",
        },
        {
          name: "google-site-verification",
          content: "OOxjPjUxN8-_Lutvr3YU_SpccgnG88yizggIkmeGP5A",
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Yurii Myronov — Portfolio" },
        {
          property: "og:description",
          content:
            "Full-stack web developer specializing in Python (Django, FastAPI) and Nuxt.js.",
        },
        { property: "og:url", content: "https://meizuno.github.io" },
        { property: "og:image", content: "https://meizuno.github.io/photo.webp" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Yurii Myronov — Portfolio" },
        {
          name: "twitter:description",
          content:
            "Full-stack web developer specializing in Python (Django, FastAPI) and Nuxt.js.",
        },
        { name: "twitter:image", content: "https://meizuno.github.io/photo.webp" },
      ],
      link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
    },
  },

  site: {
    url: "https://meizuno.github.io",
    name: "Meizuno Portfolio",
  },
});
