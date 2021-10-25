module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        'large' : '5em'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
