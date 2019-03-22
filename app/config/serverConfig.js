const cuid = require('cuid');
const cors = require('cors');
const bodyParser = require('body-parser');
const onResponseLogging = require('../middleware/routeLogging');

const { APP_NAME } = require('./settings');

module.exports.ConfigServer = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  onResponseLogging.setupAccessLog(app, APP_NAME, { rcuid: cuid() });
  app.use(cors());

  return app;
};
