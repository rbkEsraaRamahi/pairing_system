var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pairing');
// to active the debugger for MongoDB uncomment the line below
// mongoose.set('debug', true);
var db = mongoose.connection
	
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected')
  });

module.exports = db;
