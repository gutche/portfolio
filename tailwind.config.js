module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    screen: {
      "2xs": "320px",
      "xs": "375px",
      "sm": "425px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1440px",
      "2xl": "2560px"
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#00AEAE",
        instagram: "#121212",
        linkedin: "#121212",
        github: "#121212",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
}
