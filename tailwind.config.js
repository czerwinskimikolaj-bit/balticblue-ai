/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dbe5f0',
          200: '#b8cce3',
          300: '#8da9cc',
          400: '#5e7fae',
          500: '#3c5e8f',
          600: '#2d4870',
          700: '#1f3354',
          800: '#14213d',
          900: '#0a1428',
          950: '#050b18',
        },
        baltic: {
          50: '#eefdfb',
          100: '#d5f9f4',
          200: '#aef2ec',
          300: '#73e5dd',
          400: '#38ccd2',
          500: '#1aafba',
          600: '#0f8c9e',
          700: '#10707f',
          800: '#115a68',
          900: '#134b57',
          950: '#04303a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-down': 'slideDown 0.2s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
