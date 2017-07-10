var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
    res.sendFile("dist/index.html", { root: __dirname });
});

app.listen(8080, function() {
    console.log("App is listening on 8080");
});
