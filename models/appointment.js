const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: String
}, {
  timestamps: true
})

const appointmentSchema = new Schema({
  name: String,
  phoneNumber: String,
  service: String,
  time: {type: Date, index: true},
  user: {
    type: Schema.Types.ObjectId, ref: "User"
  },
  comments: [commentSchema]
}, {timestamps: true });




module.exports = mongoose.model('Appointment', appointmentSchema);



