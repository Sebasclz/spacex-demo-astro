/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.s-g-stable': {
            'scrollbar-gutter': 'stable',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
};
