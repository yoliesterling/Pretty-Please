var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Artist Schema
var artistSchema = new Schema({
    name: String,
    specialty: String,
    location: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Artist', artistSchema);