module.exports = {
  globals: {
    browser: "readonly",
    driver: "readonly",
    $: "readonly",
    $$: "readonly",
    expect: "readonly"
  },

  rules: {
    "new-cap": 0,
    "no-const-assign": ["error"],
    "no-unused-vars": ["error"],
    "default-case": ["error"],
    "no-empty": ["error"],
    "no-empty-function": ["error"]
  },

  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module"
  }
}
