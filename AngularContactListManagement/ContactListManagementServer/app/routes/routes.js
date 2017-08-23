
var express = require('express');
var app = express();
//require statements for third party apis
var log4js = require('log4js');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
//require statements for incluing models and other functionalities
var users = require('../controllers/users/users');
var usercontacts = require('../controllers/usercontacts/usercontacts');
var middlewares = require('../controllers/middlewares/middleware');
//set logging using log4js
log4js.configure({
  appenders:[{
    type:'dateFile',
    layout:{type: 'pattern', pattern: '[%d{ABSOLUTE}] [%p] [%z] [%h] [%c] [%m]'},
    filename: __dirname + '/logs/application.log',
    pattern: '.yyyy-MM-dd-hh',
    compress: false,
    numBackups: 10,
    category: 'logger'
  }]
});
var log = log4js.getLogger('logger');
log.setLevel('ALL');
app.use(log4js.connectLogger(log));


// using body-parser and cookieparser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Use cookie parser before authentication
app.use(cookieParser());
app.all('/*', function(req, res, next) {
  middlewares.commonResponseHeaders(req,res,next);
});
//app.all('/api/v1/*', middlewares.login(req,res));
app.route('/user/register').post(users.registerUser);
app.route('/admin/login').post(users.loginAdmin);
app.route('/admin/logout').post(users.logOutAdmin);
app.route('/admin/user/details').get(users.getUsers);
app.route('/admin/user/create').post(users.createUser);
app.route('/admin/user/:id').get(users.getUser);
app.route('/admin/user/:id').put(users.editUser);
app.route('/admin/user/:id').delete(users.deleteUser);

//contact page
app.route('/user/login').post(users.loginUser);
app.route('/user/logout').post(users.logOutUser);
app.route('/user/contact/details').get(usercontacts.getUserContacts);
app.route('/user/contact/create').post(usercontacts.createUserContact);
//app.route('/user/contact/:id').get(usercontacts.getContactUser);
app.route('/user/contact/:id').put(usercontacts.editUserContact);
app.route('/user/contact/:id').delete(usercontacts.deleteUserContact);

app.route('*').get(middlewares.error);

module.exports = app;
