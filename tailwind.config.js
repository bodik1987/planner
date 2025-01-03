/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        myFont: ["myFont", "sans-serif"],
        mazzardH: ["mazzardH", "sans-serif"],
      },
    },
  },
  plugins: [],
};
