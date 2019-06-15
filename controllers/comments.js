const Appointment = require("../models/appointment")

module.exports = {
    create,
}


function create(req, res){
    console.log("you in create comment")
    Appointment.findById(req.params.id, (err, appointment)=>{
        appointment.comments.push(req.body)
        appointment.save(err =>{
            res.redirect(`/appointments/${appointment._id}`)
        })
    })
}
