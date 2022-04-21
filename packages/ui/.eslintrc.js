module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["eslint:recommended", "plugin:wc/recommended", "plugin:lit/recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:storybook/recommended"],
  rules: {
    "prettier/prettier": "error"
  }
};