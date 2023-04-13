module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'import/no-unresolved': 'off',
    'comma-dangle': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/valid-v-model': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'operator-linebreak': 'off',
    'no-plusplus': 'off',
    'vue/no-multiple-template-root': 'off',
    indent: 'off',
    'vue/no-reserved-component-names': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'no-undef': 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
};
