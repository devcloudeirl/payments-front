/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "@vue/eslint-config-prettier",
    "./.eslintrc-auto-import.json",
  ],
  rules: {
    quotes: ["single"],
  },
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
};
