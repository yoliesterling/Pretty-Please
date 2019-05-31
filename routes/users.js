var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', (req, res, next) => {
  res.render('users/index', {
    title: 'Pretty, Please',
    user: req.user
  });
});



module.exports = router;
