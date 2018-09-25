const path = require('path');

module.exports = {
  extends: ['airbnb', 'plugin:jest/recommended'],
  env: {
    browser: true,
    'jest/globals': true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'jest'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
