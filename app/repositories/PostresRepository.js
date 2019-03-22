const { client, DB_MONGO_DATABASE } = require('../config/mongoConfig');

const {
  DB_MONGO_POSTRES_COLLECTION,
} = require('../config/settings');

const PostresRepository = module.exports;

PostresRepository.getNotRepeatedPostres = async (ids = []) => {
  if (!client.isConnected()) {
    await client.connect();
  }

  const db = client.db(DB_MONGO_DATABASE);

  const query = { id: { $nin: ids } };

  const products = await db.collection(DB_MONGO_POSTRES_COLLECTION)
    .find(query).toArray();

  const retriveredIds = products.map(e => e.id);
  const newIds = ids.concat(retriveredIds);
 
  return { products, ids: newIds }; 
}; 



PostresRepository.setPostres = async (postres) => {
  if (!client.isConnected()) {
    await client.connect();
  }

  const db = client.db(DB_MONGO_DATABASE);

  await Promise.all(Object.keys(postres).map( async (key) => {
      if (postres[key].id) {
        await db.collection(DB_MONGO_POSTRES_COLLECTION).save( postres[key] )
        console.log("Si")
      }
  })) 

  return { ok: true }
  // const products = await db.collection(DB_MONGO_POSTRES_COLLECTION)
  //   .find({ id: { $nin: ids }}).toArray();

  // const retriveredIds = products.map(e => e.id);
  // const newIds = ids.concat(retriveredIds);

  // return { products, ids: newIds };
}; 