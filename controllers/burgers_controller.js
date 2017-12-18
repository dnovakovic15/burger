let express = require('express');
let burgers = require('../models/burger.js');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('this is a sample!');  
});

app.listen(port);

module.exports = app;