/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen': '100dvh'
      },
      backgroundImage: {
        'view': "url('/src/assets/view.png')",
      },
    },
  },
  plugins: [],
}
