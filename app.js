const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
const app = express();
const index = require('./routes/index');

let ENV;

try {
  ENV = require('./env');
} catch (ex) {
  ENV = process.env;
}

mongoose.connect(ENV.MONGODB_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000}}));

app.use('/', index);

module.exports = app;
