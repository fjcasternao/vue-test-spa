var express = require('express');
var cors = require('cors');

var app = express();
var samples = require('./sample.json');

app.use(cors({origin: 'http://localhost:8080'}));
app.get('/services', function (req, res) {
  res.send(samples);
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});