var Appointment = require('../models/appointment');

module.exports = {
  index,
  show,
  new: newAppt,
  create,
  edit,
  update,
  delete: deleteAppointment
};



function index(req, res) {
  Appointment.find({}, (err, appointments) => {
    res.render("appointments/index", {
      user: req.user,
      appointments
    });
  });
}

function show(req, res) {
  Appointment.findById(req.params.id, (err, appointment) => {
    res.render("appointments/show", {
      user: req.user,
      appointment
    });
  });
}

function newAppt(req, res) {
  res.render('appointments/new', {
    user: req.user
  });
}

function create(req, res) {
  req.user = req.params.id;
  Appointment.create(req.body, (err, appointment) => {
    res.redirect(`/appointments/${appointment._id}`)
  })
}

function edit(req, res) {
  Appointment.findById(req.params.id, (err, appointment) => {
    res.render('appointments/edit', {
      user: req.user,
      appointment
    })
  })
}

function update(req, res){
  Appointment.findById(req.params.id, (err, appointment) =>{
    appointment.name = req.body.name
    appointment.phonenumber = req.body.phonenumber
    appointment.service = req.body.service
    appointment.time = req.body.time
    appointment.save(err => {
      res.redirect(`/appointments/${appointment._id}`)
    })
  })
}

function deleteAppointment(req,res){
  Appointment.findByIdAndDelete(req.params.id, err => {
    res.redirect("/appointments")
  })
}