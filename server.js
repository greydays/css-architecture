'use strict';

//application setup
var express = require('express');
var app = express();
var path = require('path');
var port = 3000;

app.use(express.static(path.join(__dirname, 'app')));

app.listen(port, function(){
  console.log("Awesome Site is running on " + port);
});
