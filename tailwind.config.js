/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        neutral: {
          "very-pale-blue": "hsl(225, 100%, 98%)",
          "desaturated-blue": "hsl(224, 23%, 55%)",
          "dark-blue": "hsl(223, 47%, 23%)",
        },
      },
      fontFamily: {
        rhd: ["Red Hat Display", "sans-serif"],
      },
      boxShadow: {
        '3xl': '0 15px 60px -14px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'dsktp-img': "url('/images/pattern-background-desktop.svg')",
        'mbl-img': "url('/images/pattern-background-mobile.svg')",
      }
    },
  },
  plugins: [],
};
