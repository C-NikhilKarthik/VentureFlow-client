/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        'primary':"#202225",
        'secondary':"#36393F",
        'tertiary':"#2F3136",
        'profile':"#292B2F",
        'tertiary':"#2F3136",
        'tertiary-light':"#232529",
        'primary-green':'#3BA55D'
      },
      colors:{
        'primary':"#FFFFFF",
        'secondary':"#C7C9CB",
        'tertiary':"#8E9297",
        'primary-green':'#3BA55D'
      }
    },

  },
  plugins: [
    require('flowbite/plugin')
]}
