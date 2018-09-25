module.exports = {
  moduleDirectories: [
    'node_modules',
    '/',
  ],
  testMatch: [
    '**/tests/**/*.test.js?(x)',
  ],
  browser: true,
  verbose: true,
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
  ],
};
