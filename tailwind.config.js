/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        c26 : "#262626",
        cC1 : "#C18653",
        cFA : "#FAFAFA",
        c8C : "#8C8C8C",
        c43 : "#434343",
        c14 : "#141414",
        cF5 : "#F5222D",
        c18 : "#1890FF",
        cE6 : "#E6F7FF",
        cD9 : "#D9D9D9",
        c59 : "#595959"
      },
      fontFamily: {
        sans : ["Roboto", "sans-serif"],
        grm : ["Georama", "sans-serif"],
        tnr : ["Times New Roman", "serif"]
      },
    },
  },
  plugins: [],
}