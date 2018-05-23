var mongoose = require('mongoose')
var mongoURI = 'mongodb://admin:admin@ds129770.mlab.com:29770/paring'
mongoose.connect(mongoURI)
// to active the debugger for MongoDB uncomment the line below
// mongoose.set('debug', true);
var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('we are connected')
})

module.exports = db
