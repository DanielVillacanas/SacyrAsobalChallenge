module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluecorporative: "#002D57",
        bluesooft: "#01AFD2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
