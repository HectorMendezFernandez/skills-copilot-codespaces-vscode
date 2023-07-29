// Create web server

var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/send', function(req, res) {
  res.send(req.body);
});

app.listen(process.argv[2]);