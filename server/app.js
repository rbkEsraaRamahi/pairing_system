var port = 3000;
var bodyParser = require('body-parser');
var express = require('express')
var db = require('./db/db.js');
var app = express()

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/student', require('./db/router'));

app.get('/', function(req, res){
 res.send('Hello World!')
})


app.listen(port, function(){ 
	console.log('Example app listening on port ' + port + '!')
})