var express = require('express');
var app = express();

var motivations = require('motivations');
var pickOne = require('pick-one');



app.get("/", function(request, response) {
	var motivation = pickOne(motivations);
	response.send(motivation);



});

module.exports = app;