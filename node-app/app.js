var express = require('express');
var app = express();
var formidable = require("formidable");
fs = require("fs");

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/public', express.static('public'));

var server = app.listen(3011, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
