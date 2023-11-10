/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: theme => ({
        'ws': "url('./assets/Workspace_2.jpg')",
        'sm-ws': "url('./assets/Workspace_1.jpg')",
      })
      ,
      colors: {
        'primary': {
          light: '#7bdcb5',
          DEFAULT: 'rgb(167 92 75)',
          dark: '#0e7490',
        },
        'secondary': {
          100: "#4a4e50",
          light: '#ef9767',
          DEFAULT: '#ec8045',
          dark: '#e86822',
        },
        'success': {
          DEFAULT: '#65b110'
        },

      }
    },

  },
  plugins: [],
}

