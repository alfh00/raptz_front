/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bxsh': '3px 3px 0px 0px #222222'
      },
      colors:{
        'border-color': '#444444',
        'shadow-color': '#444444',
        'bg-orange': '#FF6B00'
      }
    },
  },
  plugins: [],
}

