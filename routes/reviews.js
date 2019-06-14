var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/artists');


// GET reviews
// router.get('/artists', isLoggedIn, reviewsCtrl.index);

// POST reviews
router.post('/artists/:id/reviews', isLoggedIn, reviewsCtrl.create);

// DELETE reviews
// router.delete('/reviews/:id', isLoggedIn, reviewsCtrl.delReview);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;