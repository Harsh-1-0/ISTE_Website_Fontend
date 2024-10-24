/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			hamlin: ["Hamlin", "sans-serif"],
  			anton: ["Anton", "sans-serif"]
  		},
  		animation: {
  			'infinite-scroll': 'infinite-scroll 25s linear infinite'
  		},
  		keyframes: {
  			'infinite-scroll': {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(40%)'
  				}
  			}
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
