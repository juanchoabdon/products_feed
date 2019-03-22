const PackageJson = require('../../package.json');

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  require('dotenv').load();
}


const APP_NAME = PackageJson.name;
const {
  APP_PORT,
  COUNTRY,
  DB_MONGO_URI,
  DB_MONGO_DATABASE,
} = process.env;

const DB_MONGO_POSTRES_COLLECTION  = 'desserts_co'
 
module.exports = {
  APP_NAME,
  APP_PORT: APP_PORT || 3000,
  APP_ROUTING_PREFIX: `/api/${APP_NAME}`,
  APP_VERSION: PackageJson.version,
  COUNTRY: 'co',
  HEALTHCHECK_PATH: '/health-check',
  DB_MONGO_URI,
  DB_MONGO_DATABASE,
  DB_MONGO_POSTRES_COLLECTION
}; 
 