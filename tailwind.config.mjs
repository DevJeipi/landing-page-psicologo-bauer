/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#081a11',
          900: '#0c2417',
          850: '#112e1f',
          800: '#163b28',
          700: '#1e4f37',
          600: '#2a6b4b',
          500: '#398b63',
          400: '#52ad7e',
          300: '#7ec6a0',
          200: '#b0dfc6',
          100: '#dcf2e6',
          50: '#f0faf4',
        },
        sage: {
          900: '#243328',
          800: '#364d3d',
          700: '#4a6853',
          600: '#61856d',
          500: '#7d9f89',
          400: '#9cbaa7',
          300: '#bed3c6',
          200: '#deebe4',
          100: '#f0f5f2',
          50: '#f8faf8',
        },
        accent: {
          lime: '#c2e28f',
          'lime-hover': '#b0d676',
          leaf: '#8dc25c',
          warm: '#f3f6ee',
          cream: '#f9faf7',
          sand: '#ebeee6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        'glow-lime': '0 0 40px -10px rgba(194, 226, 143, 0.4)',
        'glow-forest': '0 20px 50px -15px rgba(12, 36, 23, 0.25)',
        'card-soft': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
