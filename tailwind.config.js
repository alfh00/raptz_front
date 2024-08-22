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
      fontFamily: {
        'chauone': ['Chau Philomene One', 'sans-serif']
      },
      boxShadow: {
        'bxsh': '3px 3px 0px 0px #222222',
        'bxshw': '6px 6px 0px 0px #EEEAE8'
      },
      colors:{
        'border-color': '#444444',
        'shadow-color': '#444444',
        'bg-orange': '#F42740',
        'bg-light': '#FBF7F7',
        'darken': '#3A4D6C'
      }
    },
  },
  plugins: [],
}

