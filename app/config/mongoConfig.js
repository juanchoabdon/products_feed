const Mongodb = require('mongodb').MongoClient;

const {
  DB_MONGO_DATABASE,
  DB_MONGO_URI,
} = require('./settings');

let client = {};

(async () => {
  client = new Mongodb(DB_MONGO_URI, { useNewUrlParser: true, poolSize: 5 });
  await client.connect();
})();

module.exports = {
  client,
  DB_MONGO_DATABASE,
};
