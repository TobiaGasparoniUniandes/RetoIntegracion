var express = require('express');
var router = express.Router();
var [getOffers, insertOffer] = require('../controllers/offers.js');

/* GET product listing. */
router.get('/', async function (req, res, next) {
  const offers = await getOffers();
  res.send(offers);
});
/**
 * POST product
 */
router.post('/', async function (req, res, next) {
  const newOffer = await insertOffer(req.body);
  res.send(newOffer);
});

module.exports = router;