module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#00AEAE",
        orange: "#ffa500",
        instagram: "#121212",
        linkedin: "#121212",
        github: "#121212",
        facebook: "#121212",
        google: "#DB4437",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
}
