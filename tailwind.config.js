/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#1A1D1E',
        'background-secondary': '#1E2122',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A1A1A1',
        'border-primary': '#2A2D2E',
        'accent-primary': '#4CAF50',
        'accent-secondary': '#388E3C',
        'n360-yellow': '#FFD700',
        'job-one': '#4CAF50',
        'whole-health': '#2196F3',
        'oaks-learning': '#FF9800'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)']
      }
    },
  },
  plugins: [],
} 