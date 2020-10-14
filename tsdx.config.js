const cssbundle = require('./cssbundle');

module.exports = {
  rollup(config, options) {
    config.plugins.push(cssbundle(options));

    return config;
  },
};
