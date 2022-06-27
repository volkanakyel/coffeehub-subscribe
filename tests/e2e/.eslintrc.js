module.exports = {
  plugins: [
    'cypress',
  ],
  env: {
    mocha: true,
    'cypress/globals': true,
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    strict: 'off',
    'vue/multi-word-component-names': 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'warn',
    'space-in-parens': 'off',
    'computed-property-spacing': 'off',
    semi: [2, 'always']
  },
};
