var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Artist Schema
var artistSchema = new Schema({
  name: {type: String, required: true},
  reviews: []
});
    


module.exports = mongoose.model('Artist', artistSchema);








