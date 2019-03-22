const express = require('express');

const { ConfigServer } = require('./config/serverConfig');
const { ConfigRouter } = require('./config/routerConfig');
const { Logger } = require('./utils/logger');

const { APP_PORT } = require('./config/settings');

const app = express();

ConfigServer(app);
ConfigRouter(app);

app.listen(APP_PORT, (err) => {
  if (err) {
    Logger.error(`${err}`);
  }
  Logger.info(`Server running on port: ${APP_PORT}`);
});

module.exports = app;
