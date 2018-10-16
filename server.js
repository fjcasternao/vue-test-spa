var express = require('express');
var app = express();

var samples = require('./sample.json');


app.get('/services', function (req, res) {
  res.send(samples);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});