const morgan = require('morgan');
const { HEALTHCHECK_PATH } = require('../config/settings');
const { stream } = require('../utils/logger');

const setupAccessLog = (app, prefix, config = {}) => {
  if (!config.disabled) {
    morgan.token('rappi-request-id', (req, res) => config.rcuid || res.get('Rappi-Request-Id'));

    const skipPath = config.hc && config.hc.path ? config.hc.path : HEALTHCHECK_PATH || '';
    const skip = req => req.method === 'GET' && req.path === skipPath;

    app.use(morgan(`${prefix || ''} :rappi-request-id - :method :url :status - :response-time ms`, { skip, stream }));
  }
};

module.exports = { setupAccessLog };
