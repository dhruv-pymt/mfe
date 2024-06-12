module.exports = {
  name: 'payments',

  exposes: {
    './Module': './src/remote-entry.js',
  },
};
