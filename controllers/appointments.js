var Appointment = require('../models/appointment');

module.exports = {
  index,
};

var AppointmentSchema = new mongoose.Schema({
    name:String,
    phoneNumber: String,
    notification : Number,
    timeZone : String,
    time : {type : Date, index : true}
  });

  function index(req, res) {
    res.render('appointments/index', {appointments});
  }

  // create function to add to DB