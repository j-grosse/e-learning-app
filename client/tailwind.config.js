/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#f4f4eb',
        secondary: '#f6d860',
        accent: '#37cdbe',
        neutral: '#ffffff',
        'base-100': '#ffffff',
      },
      borderRadius: {
        box: '1rem',
        btn: '0.5rem',
        badge: '1.9rem',
        tab: '0.5rem',
      },
      animation: {
        btn: '0.25s',
        input: '0.2s',
      },
      scale: {
        'btn-focus': '0.95',
      },
      borderWidth: {
        btn: '1px',
        tab: '1px',
      },
    },
  },
  variants: {},
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],

  // plugins: [require('daisyui')],
};
