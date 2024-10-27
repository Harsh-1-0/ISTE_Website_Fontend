const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
  	extend: {
  		fontFamily: {
  			hamlin: ["Hamlin", "sans-serif"],
  			anton: ["Anton", "sans-serif"]
  		},
  		animation: {
  			'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'slide-in-right': 'slideInRight 25s ease-out forwards',
        'slide-in-left': 'slideInLeft 25s ease-out forwards',
  		},
  		keyframes: {
  			'infinite-scroll': {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(40%)'
  				}
  			},
        'infinite-left': {
          from : {
            transform : 'translateX(100%)'
          },
          to : {
            transform : 'translateX(-100%)'
          }
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(23%)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(23%)' },
        },
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".bg-pos-x-400": {
          "background-position-x": "-420px",
        },
        ".bg-pos-x-800": {
          "background-position-x": "-840px",
        },
        ".bg-pos-x-300": {
          "background-position-x": "-300px",
        },
        ".bg-pos-x-600": {
          "background-position-x": "-600px",
        },
        ".bg-pos-x-150": {
          "background-position-x": "-150px",
        },
      });
    },
      require("tailwindcss-animate")
],
};
