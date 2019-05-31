var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    number: String,
    googleId: String,
    appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Appointment'
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);