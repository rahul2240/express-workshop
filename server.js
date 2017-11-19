// 1. create server.js

// 2. require the express library

var express = require('express');
var fs = require('fs');
// 3. Initialise the server
var app = express();

// 4. Start 'listening' for potential requests
app.listen(3000, function(){
	console.log('Server is listening on port 3000');
});

// 5. Switch the server on!  node server.js

// 6.Serving static files

app.use(express.static("public"));

var formidable = require('express-formidable');

app.use(formidable());

app.post('/', function (req, res) {
   console.log(req.fields);

});

