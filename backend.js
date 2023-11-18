var express = require('express');
var app = express();
var path = require('path');
var game = path.join(__dirname, 'frontend');

app.get('/', function(req, res) {
    res.sendFile(path.join(game, '/html/index.html'));
});

app.get('/lightning', function(req, res) {
  res.sendFile(path.join(game, '/html/lightning.html'));
});

app.use('/', express.static(game));

app.listen(8080);