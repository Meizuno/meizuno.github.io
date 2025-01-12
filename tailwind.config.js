/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
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
