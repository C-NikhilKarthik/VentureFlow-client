/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        'primary':"#313239",
        'secondary':"#2b2d31",
        'tertiary':"#1f1f23",
        'tertiary-light':"#232529",
        'message':'#383b41'
      },
      colors:{
        'light':"#f0f3f4",
        'secondary':"#b4bbc1",
        'secondary-light':"#80848e"
      }
    },

  },
  plugins: [],
}
