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
        hero: "url('../../../public/images/bg-hero.jpg')",
      },
    },
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
  },
  daisyui: {
    themes: [
      {
        stoneplus: {
          primary: "#F7F8F8",
          "primary-content": "#121C22",
          secondary: "#E44E29",
          "secondary-content": "#F7F8F8",
          accent: "#FEDC00",
          "accent-content": "#121C22",
          neutral: "#121C22",
          "neutral-content": "#F7F8F8",
          "base-100": "#F7F8F8",
          "base-200": "#EBECEC",
          "base-300": "#BFC0C0",
          "base-content": "#121C22",
          info: "#0000ff",
          "info-content": "#c6dbff",
          success: "#25d366",
          "success-content": "#FFFFFF",
          warning: "#00ff00",
          "warning-content": "#001600",
          error: "#ff0000",
          "error-content": "#160000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
