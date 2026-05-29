/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cosmos: {
          50: '#fdf8ef',
          100: '#f5e6c8',
          200: '#e8c98c',
          300: '#d4a854',
          400: '#c4912f',
          500: '#a87424',
          600: '#8a5a1e',
          700: '#6e451d',
          800: '#5a381e',
          900: '#4c301f',
          950: '#2a190d',
        },
        void: {
          50: '#f5f5f6',
          100: '#e6e6e8',
          200: '#c8c8cd',
          300: '#9e9ea8',
          400: '#6e6e7c',
          500: '#525260',
          600: '#41414e',
          700: '#363640',
          800: '#2a2a32',
          900: '#1e1e24',
          950: '#0d0d11',
        },
        accent: {
          50: '#fef9ec',
          100: '#fcf0c8',
          200: '#f9de8a',
          300: '#f5c64c',
          400: '#f0b127',
          500: '#e69510',
          600: '#cb740b',
          700: '#a9560d',
          800: '#8c4513',
          900: '#743b14',
          950: '#421d06',
        },
        starlight: '#f0f0f5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
