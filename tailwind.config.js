/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      '2xl': '1536px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
      'mob-l': '425px',
      'mob-m': '375px',
      'mob-s': '320px',
      'jio': '240px',
    },
  },
  plugins: [],
}

