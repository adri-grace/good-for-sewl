const express = require('express');
const logger = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

require('dotenv').config();
require('./config/database');

// Middleware
app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

const usersRoutes = require('./routes/api/users');
app.use('/api/users', usersRoutes);

const projectsRoutes = require('./routes/api/projects');
app.use('/api/projects', projectsRoutes);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});