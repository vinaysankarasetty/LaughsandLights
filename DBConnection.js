var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL 
var url = 'mongodb://localhost:27017/LaughsLights';
var connection = null;
// Use connect method to connect to the Server 
var connect = function(){
	MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to DB server");
  module.exports.connection = db;
 
  /*insertDocuments(db, function() {
    db.close();
  });*/
});
};

var close = function(){
	if(connection){

		connection.close();

	}
}

module.exports = {
	"connect" : connect,
	"connection" : connection,
	"close" : close
}