module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "comma-dangle": "off",
    "eol-last": "off",
  }
};
