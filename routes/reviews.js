var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/artists');

router.post('/artists/:id/reviews', reviewsCtrl.create);

module.exports = router;