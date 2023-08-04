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
    },
    colors: {
      white: '#ffffff',
      orange: '#FF6200',
      darkred: '#D13F00',
      lightgray: '#F9F9F9',
      darkGray: '#525152',
      black: '#000000',
      gray: '#D3D3D3',
      green: '#ADFF2F'

    }
  },
  plugins: [],
}
