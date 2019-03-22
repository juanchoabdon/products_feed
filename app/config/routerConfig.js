const routes = require('../router');
const { Logger } = require('../utils/logger');

const { APP_ROUTING_PREFIX } = require('./settings');

module.exports.ConfigRouter = (app) => {
  Logger.info(`App routing prefix: ${APP_ROUTING_PREFIX}`);
  app.use(APP_ROUTING_PREFIX, routes);

  return app;
};
