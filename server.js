
// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var user = require("./routes/user");


// Express
var app = express();
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());

// Routes
app.use('/user', user);


// Server
app.listen(3000);
console.log('API listening in port 3000');
