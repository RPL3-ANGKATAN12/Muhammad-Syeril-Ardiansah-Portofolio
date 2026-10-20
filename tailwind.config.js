/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F97316',
          'orange-dark': '#EA580C',
          black: '#111111',
          white: '#FFFFFF',
          gray: '#6B7280',
          lightgray: '#F5F5F5',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'subtle-hover': '0 10px 40px rgba(0, 0, 0, 0.08)',
      }
    }
  },
  plugins: [],

}
