module.exports = {
  presets: ['@babel/preset-react'],
  plugins: [
    'react-hot-loader/babel',
    'transform-object-rest-spread',
  ],
  env: {
    test: {
      plugins: [
        'transform-es2015-modules-commonjs',
        '@babel/plugin-syntax-object-rest-spread',
      ],
    },
  },
};
