const { APP_NAME, APP_VERSION } = require('../config/settings');

const HealthcheckController = module.exports;

HealthcheckController.check = (req, res) => res.status(200).send({
  app_version: APP_VERSION,
  app_name: APP_NAME,
});
