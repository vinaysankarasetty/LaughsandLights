var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var webservice = express.Router();
var dbConnection = require('./DBConnection.js');
var eventsCRUD = require('./eventCRUD.js');
//var ws_router = require("./ws_router.js");

var port = 3000;

webservice.get('/eventTypes', function (req, res) {
	eventsCRUD.getEvents(res);
  
});

webservice.post('/eventTypes', function (req, res) {
	eventsCRUD.postEvents(req.body, res);
  
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


if(!dbConnection.connection){
	dbConnection.connect();
}
app.use('/ws',webservice);

app.listen(port);

console.log("Server started successfully on port "+port+"!!!");