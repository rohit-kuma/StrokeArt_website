/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'brand-background': '#F5F3FF',
        'brand-text': '#111827',
        'brand-primary': '#480EAB',
        'brand-secondary': '#EDE9FE',
        'brand-accent': '#8B5CF6',
      }
    },
  },
  plugins: [],
}
