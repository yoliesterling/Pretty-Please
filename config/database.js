var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true
});

var db = mongoose.connection;

// database connection event
mongoose.connection.on('connected', function () {
  console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});

mongoose.connection.on('error', function (err) {
  console.log(err);
});

module.exports = mongoose;