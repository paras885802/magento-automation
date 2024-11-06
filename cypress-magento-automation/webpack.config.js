const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.json', '.tsx'],
    alias: {
      '@cypress': path.resolve(__dirname, 'node_modules/cypress'),
    },
  },
};