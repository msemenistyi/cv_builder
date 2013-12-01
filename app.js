var express = require('express'),
	http = require('http');


var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/client/javascripts'));


var port = 1212;
app.listen(port);

console.log('app is listening on port ', port);