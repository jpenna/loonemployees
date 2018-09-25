module.exports = {
  presets: ['@babel/react'],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-object-rest-spread',
  ],
  env: {
    test: {
      plugins: [
        'transform-es2015-modules-commonjs',
      ],
    },
  },
};
