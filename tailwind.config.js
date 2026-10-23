/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003A70',
          dark: '#00264A',
          light: '#1B528A',
          50: '#F0F5FA',
          100: '#D9E6F2',
        },
        secondary: {
          DEFAULT: '#FFC84D',
          hover: '#F2B938',
          dark: '#D49B1E',
        },
        accent: {
          DEFAULT: '#FFC84D',
        },
      },
      fontFamily: {
        heading: ['Be Vietnam Pro', 'sans-serif'],
        body: ['Be Vietnam Pro', 'sans-serif'],
      },
      borderRadius: {
        'none': '0px',
        'sm': 'var(--radius-sm, 4px)',
        'DEFAULT': 'var(--radius-md, 8px)',
        'md': 'var(--radius-md, 8px)',
        'lg': 'var(--radius-lg, 12px)',
        'xl': 'var(--radius-xl, 16px)',
        '2xl': 'var(--radius-2xl, 24px)',
        '3xl': 'var(--radius-3xl, 32px)',
        'full': '9999px',
      },
    },
  },
  plugins: [],
};
