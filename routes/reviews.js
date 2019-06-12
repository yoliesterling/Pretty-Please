var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/artists');

router.post('/artists/:id/reviews', reviewsCtrl.create);

// app.get('/artists/show', function(req, res) {
//     res.render('/artists/show');
// });

module.exports = router;