const Artist = require('../models/artist');

module.exports = {
    index,
    addReview
}

function index(req, res) {
    Artist.find({})
    .then(artists => {
        res.render('artists/index', {
            user: req.user,
            artists
        });
    })
    .catch(err => res.redirect('/artists'));
}

function addReview(req, res) {
    Artist.findByIdAndUpdate(req.body.artist, { $push: {
        reviews: req.body.content
    }}, { new: true })
    .then(updatedArtistWithReviewAdded => {
        console.log(updatedArtistWithReviewAdded)
        res.redirect('/artists')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/artists')
    });
}