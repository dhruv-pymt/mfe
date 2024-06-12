module.exports = {
  name: 'cart',

  exposes: {
    './Module': './src/remote-entry.js',
  },
  remotes: [['button', 'http://localhost:4700']],
};
