var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');


router.get('/', reviewsCtrl.index);
router.post('/reviews', reviewsCtrl.addReview);


module.exports = router;