var express = require('express');
var service_routes = express.Router();

service_routes.get('/', function (req, res) {
  res.send('hello service')
});

exports = service_routes;