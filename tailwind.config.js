module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
       'primary': '#3490dc',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
     }),
    extend: {
      borderRadius: {
        large: "5em",
      },
      colors: {
        "blue-dark": "#0E1F2F",
        "blue-darker": "#2A2E4B",
        "dark-white" : "#F0F2F5",
        "icon-grey" : "#5B5B5B",
        "icon-grey2" : "#C7CBD1",
        "icon-grey3" : "#C9CDD4",
        "icon-blue" : "#0093FD",
        "icon-red" : "#E94546",
        "icon-green" : "#83CD29",
        "icon-pblue" : "#3473A5",
        "icon-pgblue" : "#316192",
        "icon-yellow" : "#FFCB2D",
        "icon-yellow2" : "#F7DF1E",
        "icon-gred" : "#F05033",
      },
      backgroundImage: {
        "space-background": "url('/src/images/m90bb95n3m651.jpg')",
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ['group-hover'],
      gradientColorStops: ['active', 'group-hover'],
    },
  },
  plugins: [],
};
