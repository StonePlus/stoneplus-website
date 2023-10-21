/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        gunmetal: {
          50: "#F7F8F8",
          200: "#DFE0E0",
          300: "#BFC0C0",
          400: "#9598A0",
          600: "#454B58",
          700: "#2E3543",
          800: "#242A36",
          950: "#121C22",
        },
        coral: {
          400: "#E66445",
          500: "#E55937",
          600: "#E2451E",
        },
      },
      backgroundImage: {
        'hero': "url('../../../public/img/bg-hero.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
};
