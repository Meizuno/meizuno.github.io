/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen': '100svh'
      },
      backgroundImage: {
        'view': "url('/src/assets/view.png')",
      },
    },
  },
  plugins: [],
}
