const path = require('path');

module.exports = {
  extends: ['airbnb', 'plugin:mocha/recommended'],
  env: {
    browser: true,
    mocha: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'mocha'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
