/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "header-background": "url('../public/media/imgs/glasses.jpg')",
      },
      colors: {
        blue: "#1fb6ff",
        orange: "#fc9701",
        green: "#13ce66",
        yellow: "#e5b970",
        "gray-dark": "#2d2d2d",
        gray: "#8b8b8b",
        "gray-light": "#dadeda",
      },
    },
  },
  plugins: [],
};
