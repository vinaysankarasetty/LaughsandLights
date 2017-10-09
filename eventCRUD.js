var dbConnection = require('./DBConnection.js');

var getEvents = function(res){
	if(dbConnection.connection){
		
		dbConnection.connection.collection("EventType").find().toArray(function(err, docs){

			res.send(docs);

		});
		
	}
};

var postEvents = function(body, res){
	if(dbConnection.connection){
		
		dbConnection.connection.collection("EventType").insert(body, function(err, docs){

			res.send(docs);

		});
		
	}
}


module.exports = {
	'getEvents' : getEvents,
	'postEvents' : postEvents
}