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
      backgroundImage: {
        "space-background": "url('/src/images/m90bb95n3m651.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
