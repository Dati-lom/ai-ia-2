/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(140, 28, 28, 0.5)', // Main dark red color
        secondary: '#FDF4FD', // Light background color
        tetriary: 'rgb(140, 28, 28)'
      },
    },
  },
  plugins: [],
}

