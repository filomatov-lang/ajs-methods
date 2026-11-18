module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["airbnb-base"],
  overrides: [
    {
      files: ["**/*.test.js"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      rules: { "jest/prefer-expect-assertions": "off" },
    },
    {
      files: ["src/js/app.js"],
      rules: {
        "max-classes-per-file": ["error", 7],
      },
    },
  ],
  rules: {
    "import/extensions": [
      "error",
      "always",
      {
        js: "always",
        jsx: "never",
      },
    ],
  },
};
