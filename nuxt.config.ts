/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-10-05",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"],
  },

  css: ["@/assets/css/main.css", "@/assets/css/fonts.css"],

  // modules: ["~/modules/socket.ts"],
});
