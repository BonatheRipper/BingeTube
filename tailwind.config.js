/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-yellow": "#FFD232",
        "c-green": "#01E801",
        "c-red": "#FF1414",
        "c-blue": "#38B6FF",
        "c-LightDark": "#750DEA",
        "c-xx": "#EA0D82",
        "c-xxx": "#0D73EA",
        "c-xxxx": "#4D0DEA",
        "c-xxxxx": "#A6A6A6",
      },
      backgroundColor: {
        "cb-gold": "#D2B6A2",
      },
      fontFamily: {
        fair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
