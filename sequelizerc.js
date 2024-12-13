const path = require('path');

module.exports = {
  'config': path.resolve('src', 'config', 'database.js'),
  'models-path': path.resolve('src', 'data', 'database', 'models'),
  'migrations-path': path.resolve('src', 'data', 'database', 'migrations'),
  'seeders-path': path.resolve('src', 'data', 'database', 'seeders'),
};
