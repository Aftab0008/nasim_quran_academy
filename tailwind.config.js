// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
      },
      animation: {
        breathe: 'breathe 3s ease-in-out infinite',
      },
    },
  },
};

// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      colors: {
        islamicGreen: '#1E4D2B',
        gold: '#D4AF37',
      },
    },
  },
  plugins: [],
}
