var Users = require('../../models/models').Users;
var response = require('../responses/response').structure;


exports.commonResponseHeaders = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'cookie, username, password, credentials,userid, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    // Below value set to true is unsafe - use with only HTTPS preferably
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
};
exports.error = function (req, res, next) {
var result = response;
res.status(405).json(result.error);
};
