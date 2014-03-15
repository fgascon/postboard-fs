var express = require('express');
var postboard = require('..');

var app = express();

app.use(postboard(__dirname + '/store'));

app.listen(3000);
