const express = require('express');
const logger = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001

require('dotenv').config();
require('./config/database');

// Middleware
app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

app.use('/api/users', require('./routes/api/users'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});