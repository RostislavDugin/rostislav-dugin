/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F2',
        ink: {
          50: '#F6F7F8',
          100: '#ECEEF1',
          200: '#E2E5EA',
          300: '#CBD0D8',
          400: '#94A3B8',
          500: '#52617A',
          600: '#3F4B5E',
          700: '#334155',
          900: '#0F172A',
        },
        accent: '#2563EB',
        accentSoft: '#EFF4FF',
        success: '#15803D',
      },
      fontFamily: {
        sans: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Jost', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        xl: '14px',
      },
    },
  },
  plugins: [],
};
