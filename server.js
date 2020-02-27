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

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});