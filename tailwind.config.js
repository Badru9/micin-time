// tailwind.config.js
const { heroui } = require('@heroui/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: '#ED7D31',
            accent: '#4F4A45',
            secondary: '#6C5F5B',
            background: '#F6F1EE',
          },
        },
        dark: {
          colors: {
            primary: '#ED7D31',
            accent: '#4F4A45',
            secondary: '#6C5F5B',
            background: '#F6F1EE',
          },
        },
      },
    }),
  ],
};
