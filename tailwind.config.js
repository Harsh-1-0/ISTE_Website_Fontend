/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        hamlin : ['Hamlin','sans-serif'],
        anton : ['Anton','sans-serif'],
      },animation:{
        'infinite-scroll':'infinite-scroll 25s linear infinite',
      },
      keyframes:{
        'infinite-scroll' : {
          from:{transform: 'translateX(0)'},
          to:{transform: 'translateX(40%)'},
        }
      },
    },
  },
  plugins: [
    function({addUtilities}){
      addUtilities({
        '.bg-pos-x-400':{
          'background-position-x':'-420px',
        },
        '.bg-pos-x-800':{
          'background-position-x':'-840px',
        },
      })
    }
  ],
};
