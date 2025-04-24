/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'false',
  lightMode: 'true',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/json/data/*.{js,ts,jsx,tsx,mdx,json}",
    "// Or if using `src` directory:\n    \"./src/**/*.{js,ts,jsx,tsx,mdx}\"",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '992px',
      // => @media (min-width: 1199px) { ... }
      'xl': '1170px',
      // => @media (min-width: 1240px) { ... }
      '1xl': '1260px',
      // => @media (min-width: 1440px) { ... }
      '2xl': '1640px',
    },

    extend: {
      colors: {
        'white': '#ffffff',
        'transparent': 'transparent',

        violet: {
          '400': '#F5EFEC',
          '900': '#805A81',
        },
        gray: {
          '100': '#777777',
          '200': '#454545',
          '300': '#F3F3F3',
          '400': '#676767',
          '600': '#333333',
          '700': '#232323',
          '800': '#2F2F2F',
          '900': '#1e1d1f',
        },
        yellow: {
          '900': '#f9bc60',
        },
        caramel: {
          '400': '#f2f5f4',
          '900': '#7C9D96',
        },
        pink: {
          '400': '#fbeef3',
          '900': '#b95177',
        },
        purple: {
          '400': '#f5f4f9',
          '900': '#af85db',
        },


      },
      fontFamily: {
        'nabi': ['nabi', 'sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'almarai': ['Almarai', 'sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'montserrat': ['Montserrat', 'sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'catchye': ['Catchye', 'sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
      },
      fontSize: {
        'md': '16px',
        'lg': '18px',
        'xl': '30px',
        '1xl': '35px',
        '2xl': '38px',
        '3xl': '40px',
        '4xl': '55px',
        '8xl': '100px',
      },
      spacing: {
        'full': '100%',

      },
      boxShadow: {
        'green': 'rgba(0, 70, 67, 0.10) 11px 0px 29px',
        'box': 'rgba(0, 70, 67, 0.10) 4px 0px 22px',
        'boxhover': 'rgba(0, 0, 0, 0.15) 0px 10px 18px',
        'input': 'rgba(0, 70, 67, 0.04) 0px 8px 20px',
        'topbar': 'rgba(0, 70, 67, 0.10) 4px 0px 54px',
        'tabbox': 'rgba(0, 0, 0, 0.06) 4px 0px 18px',
        'review': 'rgba(0, 70, 67, 0.08) 0px 0px 32px',
        'btn': 'rgba(0, 70, 67, 0.08) 5px 8px 12px',
      },
      borderRadius: {
        '5xl': '60px',
        'xl': '10px',
        '1xl': '12px',
        '2xl': '15px',
        '4xl': '20px',
        '1.5': '6px',
      },
      margin: {
        'auto': 'auto',
      },
      zIndex: {
        '-1': '-1',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
      },
      height: {
        '100vw': '100vw',
      },
      content: {

      },
      transitionDuration: {
        '0': '0ms',
        '3000': '3000ms',
      },
      width: {
        '1/6' : '16.66%',
        '2/6' : '33.333333%',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'slideDown': 'slideDown  0.35s ease-out',
      }
    },

  },
  darkMode: "class",
  plugins: [heroui()]}

