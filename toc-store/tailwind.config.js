/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant"', 'serif'],
      },
      colors: {
        toc: {
          cream: '#F2EDE4',
          beige: '#E8DFD0',
          linen: '#F9F6F1',
          sand: '#C9BAA5',
          clay: '#C4A882',
          taupe: '#8C7560',
          brown: '#5C4433',
          charcoal: '#28231E',
          black: '#161210',
          gold: '#B8914F',
          'gold-light': '#DFC28A',
          blush: '#E8D5C4',
          warm: '#EFE6D8',
        }
      },
      letterSpacing: {
        'widest-xl': '0.3em',
        'widest-2xl': '0.5em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-in': 'slideIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}
