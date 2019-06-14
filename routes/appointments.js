const express = require('express');
const Appointment = require('../models/appointment');
const User = require('../models/user');
const router = new express.Router();


// route that invokes controller function 
router.post('/', function(req, res) {
  Appointment.create(req.body, function(err, appointment) {
    User.findByIdAndUpdate(req.user._id, {$push: {appointments: appointment._id }}, 
      {new: true}, function(err, user) {
      res.redirect('/');
    })
  });
});


// GET: /appointments
router.get('/', function(req, res, next) {
  Appointment.find()
    .then(function(appointments) {
      res.render('appointments/index', {
        appointments: appointments, 
        user: req.user,
      });
    });
});


// GET: /appointments/show
router.get('/', function(req, res, next) {
  res.render('appointments/show', {
    user: req.user
  });
});


module.exports = router;
