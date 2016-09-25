'use strict';

var express = require('express');
var app = express();
var db = require('./db');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var chalk = require('chalk');
var server = require('http').createServer();
const router = require('express').Router();

app.use(express.static(path.join('public')));
app.use(express.static(path.join('browser')));
app.use(express.static(path.join('node_modules')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api', require('./routes'));
// app.use('/jobleads', require('./routes/tweets'));


// Plug in twitter stream
require('./routes/tweets');

// Create a node server instance! cOoL!

var createApplication = function () {
    server.on('request', app); // Attach the Express application.
};

var startServer = function () {

    var PORT = process.env.PORT || 3001;

    server.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });

};

db.sync()
.then(createApplication)
.then(startServer)
.catch(function (err) {
    console.error(chalk.red(err.stack));
    process.exit(1);
});
