var express = require('express'),
	http = require('http');


var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));


var port = 1212;
app.listen(port);

console.log('app is listening on port ', port);