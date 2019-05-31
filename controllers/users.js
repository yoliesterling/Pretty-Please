var User = require('../models/user');

module.exports = {
    index
};

function index(req, res, next)
    console.log(req.query)
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    res.render('users/index', {
        users,
        user: req.user
});


