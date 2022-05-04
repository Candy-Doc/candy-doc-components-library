module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,mdx}"],
  theme: {
    extends: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
