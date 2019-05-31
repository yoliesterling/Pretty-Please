'use strict';

const express = require('express');
const momentTimeZone = require('moment-timezone');
const moment = require('moment');
const Appointment = require('../models/appointment');
const User = require('../models/user');
const router = new express.Router();




// route that invokes controller function 
router.post('/', function(req, res) {
  Appointment.create(req.body, function(err, appointment) {
    User.findByIdAndUpdate(req.user._id, {$push: {appointments: appointment._id }}, {new: true}, function(err, user) {
      res.redirect('/');
    })
  });
});

// GET: /appointments/show
router.get('/', function(req, res, next) {
  res.render('appointments/show', {
    user: req.user
  });
});

// GET: /appointments
router.get('/', function(req, res, next) {
  Appointment.find()
    .then(function(appointments) {
      res.render('appointments/index', {
        appointments: appointments, 
        user: req.user,
        // title:
      });
    });
});



// GET: /appointments/:id/edit
router.get('/:id/edit', function(req, res, next) {
  const id = req.params.id;
  Appointment.findOne({_id: id})
    .then(function(appointment) {
      res.render('appointments/edit', {timeZones: getTimeZones(),
                                       appointment: appointment});
    });
});

// POST: /appointments/:id/edit
router.post('/:id/edit', function(req, res, next) {
  const id = req.params.id;
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const notification = req.body.notification;
  const timeZone = req.body.timeZone;
  const time = moment(req.body.time, 'MM-DD-YYYY hh:mma');

  Appointment.findOne({_id: id})
    .then(function(appointment) {
      appointment.name = name;
      appointment.phoneNumber = phoneNumber;
      appointment.notification = notification;
      appointment.timeZone = timeZone;
      appointment.time = time;

      appointment.save()
        .then(function() {
          res.redirect('/');
        });
    });
});

// POST: /appointments/:id/delete
router.post('/:id/delete', function(req, res, next) {
  const id = req.params.id;

  Appointment.remove({_id: id})
    .then(function() {
      res.redirect('/');
    });
});

module.exports = router;
