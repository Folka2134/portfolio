module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        large: "5em",
      },
      colors: {
        "blue-dark": "#0E1F2F",
        "blue-darker": "#2A2E4B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
