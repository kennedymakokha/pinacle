/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      backgroundImage: theme => ({
        'ws': "url('./assets/Workspace_2.jpg')",
        'sm-ws': "url('./assets/Workspace_1.jpg')",
        'about-bg-1': "url('./bg.png')",
        'about-bg-2': "url('./assets/about/bg.jpg')",
      }),
      
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

