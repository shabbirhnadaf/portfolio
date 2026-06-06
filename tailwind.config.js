export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        surface: '#0B1020',
        'accent-blue':   '#3B82F6',
        'accent-purple': '#8B5CF6',
        'accent-cyan':   '#22D3EE',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow:          '0 0 48px rgba(59,130,246,0.30)',
        'glow-cyan':   '0 0 48px rgba(34,211,238,0.22)',
        'glow-purple': '0 0 48px rgba(139,92,246,0.22)',
      },
      animation: {
        float:       'float 8s ease-in-out infinite',
        'spin-slow': 'spin 28s linear infinite',
        shimmer:     'shimmer 2.4s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
      },
    },
  },
  plugins: [],
}