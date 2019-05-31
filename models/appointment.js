const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  name: String,
  phoneNumber: String,
  service: String,
  time: {type: Date, index: true},
}, {timestamps: true });




module.exports = mongoose.model('Appointment', appointmentSchema);





