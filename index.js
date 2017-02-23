var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static(path.join(__dirname, '/static')));
app.use('/scripts', express.static(path.join(__dirname, '/node_modules')));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);
