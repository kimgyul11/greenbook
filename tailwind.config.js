/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navbarColor: "",
      },
      backgroundImage: {
        banner: `url(../public/images/banner.jpeg)`,
      },
    },
  },
  plugins: [],
};
