var assert = require('assert');
var mongoose = require('mongoose');
var Artists = require('../models/artist');

module.exports = {
    index
};

var ArtistSchema = new mongoose.Schema({

});

function index(req, res) {
    res.render('artists/index', {artists});
}