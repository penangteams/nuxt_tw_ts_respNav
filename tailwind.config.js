/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dirty-headline": ['"Dirty Headline 2"', "sans-serif"],
      },
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [],
};
