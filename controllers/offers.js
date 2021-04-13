const mdbconn = require('../db/Mongolib.js');

const DB_NAME = 'job';
const COLL_NAME = 'offers';

function getOffers() {
  return mdbconn.conn().then((client) => {
    return client.db(DB_NAME).collection(COLL_NAME).find({}).toArray();
  });
}

function insertOffer(product) {
  return mdbconn.conn().then((client) => {
    return client.db(DB_NAME).collection(COLL_NAME).insertOne(product); // Si no se provee un ID, este será generado automáticamente
  });
}

module.exports = [getOffers, insertOffer];