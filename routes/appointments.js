const express = require('express');
const Appointment = require('../models/appointment');
const User = require('../models/user');
const router = new express.Router();
const apptCtrl = require('../controllers/appointments')




// GET: /appointments
router.get('/appointments/', apptCtrl.index);
router.get('/appointments/:id', apptCtrl.show);
router.get('/users/:id/appointments/new', apptCtrl.new)
router.post('/users/:id/appointments/', apptCtrl.create)
router.get("/appointments/:id/edit", apptCtrl.edit);
router.put("/appointments/:id", apptCtrl.update);
router.delete('/appointments/:id', isLoggedIn, apptCtrl.delete)


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect("/")
}


module.exports = router;
