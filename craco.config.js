const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@commons': path.resolve(__dirname, 'src/commons'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
  },
};
