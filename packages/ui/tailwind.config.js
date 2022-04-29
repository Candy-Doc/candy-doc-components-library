module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extends: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
