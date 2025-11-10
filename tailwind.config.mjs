/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Color palette from WordPress reference site
        'brand-black': '#000000',
        'brand-white': '#ffffff',
        'brand-gray-dark': '#32373c',
        'brand-gray': '#abb8c3',
        'brand-red': '#cf2e2e',
        'brand-orange': '#ff6900',
        'brand-orange-hover': '#ff8044', // Original gladiatorgames.net hover color
        'brand-cyan': '#0693e3',
        'brand-purple': '#9b51e0',
      },
      fontSize: {
        'xs': '13px',
        'base': '20px',
        'xl': '36px',
        '2xl': '42px',
      },
      spacing: {
        'section': '24px',
      },
    },
  },
  plugins: [],
}
