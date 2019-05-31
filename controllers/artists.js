var Artist = require('../models/artist');

module.exports = {
  create
};

function create(req, res) {
  Artist.findById(req.params.id, function(err, artist) {
    artist.reviews.push(req.body);
    artist.save(function(err) {
      res.redirect(`/artist/${artist._id}`);
    });
  });
}