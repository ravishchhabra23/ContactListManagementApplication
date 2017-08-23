var Users = require('../../models/models').Users;
var response = require('../responses/response').structure;
var middleware = require('../middlewares/middleware');

exports.getUsers = function(req,res,next){
    var result = response;
    Users.find({},'_id userid password username firstname lastname usertype created enabled',function(err,data){
        
        if(err){return res.status(400).json(result.faildata);}
        result.success.result = data;
        return res.status(200).json(result.success);
    })
};
function validateUser(username){
    var result = response;
    Users.findById({username:username},'_id username firstname lastname usertype createdby created enabled',function(err,data){
        if(err){return res.status(400).json(result.faildata);}
        return data;
    })
};
exports.getUser = function(req,res,next){
    
    var result = response;
    if(req.body.cookies) {
        var acookie = req.body.cookies._a;
        query = {'login.acookie': acookie,usertype:'admin'}
    } else {
        query = {username: req.body.username, password: req.body.password}
    }
    Users.find(query, 'username usertype enabled', function (err, data) {
        
        if (err || data == undefined) return res.status(400).json(result.faildata);
        if (data.length === 0) return res.status(401).json(result.authenticationerror);
        if (data.length > 1) return res.status(401).json(result.authenticationerror);
        if (data.length === 1) {
            
            Users.find({userid:req.params.id},'userid username firstname lastname usertype createdby created enabled',function(err,data){
                
                if(err){return res.status(400).json(result.faildata);}
                result.success.result = data;
                return res.status(200).json(result.success);
            })
        }
    })   
};
exports.createUser = function (req, res, next) {
    var result = response;
    var query;
    if(req.body.cookies) {
        var acookie = req.body.cookies._a;
        query = {'login.acookie': acookie,usertype:'admin'}
        
    } else {
    }
    Users.find(query, 'username usertype enabled', function (err, data) {
        
        if (err || data == undefined) return res.status(400).json(result.faildata);
        if (data.length === 0) return res.status(401).json(result.authenticationerror);
        if (data.length > 1) return res.status(401).json(result.authenticationerror);
        if (data.length === 1) {
            var createData = {
            username: req.body.username,
            password: req.body.password,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            usertype:req.body.usertype,
            created:req.body.created,
            enabled:req.body.enabled
        }
        if (req.body.usertype) { createData.usertype = req.body.usertype }
        if (req.body.enabled != undefined) { createData.enabled = req.body.enabled }
        Users.create(createData, function (errr, datar) {
            if (errr) return res.status(400).json(result.faildata);
            var resData = {
                _id: datar._id,
                username: datar.username,
                usertype: datar.usertype,
                created: datar.created,
                enabled: datar.enabled
            };
            result.success.result = resData;
            return res.status(200).json(result.success);
        });
        }
    })
};

exports.editUser = function (req, res, next) {
    
    var result = response;
    var query;
    var editData = {};
    
    if(req.body.cookies) {
        var acookie = req.body.cookies._a;
        query = {'login.acookie': acookie,usertype:'admin'}
    } else {
    }
    

    Users.find(query, 'username usertype enabled', function (err, data) {
        
        if (err || data == undefined) return res.status(400).json(result.faildata);
        if (data.length === 0) return res.status(401).json(result.authenticationerror);
        if (data.length > 1) return res.status(401).json(result.authenticationerror);
        if (data.length === 1) {
            if (req.body.username) {editData.username = req.body.username}
            if (req.body.enabled != undefined) {editData.enabled = req.body.enabled}
            if (req.body.firstname) {editData.firstname = req.body.firstname}
            if (req.body.lastname) {editData.lastname = req.body.lastname}
            Users.update({userid: req.params.id}, {$set: editData}, function (errr, datar) {
                
            if (errr) return res.status(400).json(result.faildata);
            result.success.result = datar;
            return res.status(200).json(result.success);
        })
        }
    });
};

exports.deleteUser = function (req, res, next) {
    var query;
    var result = response;
     if(req.body.cookies) {
        var acookie = req.body.cookies._a;
        query = {'login.acookie': acookie,usertype:'admin'}
    } else {
        query = {username: req.body.username, password: req.body.password}
    }

    Users.find(query, 'username usertype enabled', function (err, data) {
        if (err || data == undefined) return res.status(400).json(result.faildata);
        if (data.length === 0) return res.status(401).json(result.authenticationerror);
        if (data.length > 1) return res.status(401).json(result.authenticationerror);
        if (data.length === 1) {
            Users.remove({userid: req.params.id}, function (errr, datar) {
                if (errr) return res.status(400).json(result.faildata);
                if(datar.result.n > 0 || datar.result.nRemoved > 0){
                    result.success.result = datar;
                    return res.status(200).json(result.success);
                } else {
                    return res.status(400).json(result.faildata)
                }
            });
        }
    })
};

exports.loginUser = function (req, res, next) {
    var result = response;
    var query;
   if(req.body.cookies) {
        if(req.body.cookies._u != undefined){
            var ucookie = req.body.cookies._u;
            query = {'login.ucookie': ucookie,usertype:'user'}
            
            }
        else{
            query = {username: req.body.username, password: req.body.password,usertype:'user'}
            
        }
    } else {
        query = {username: req.body.username, password: req.body.password,usertype:'user'}
        
    }

    Users.find(query, 'userid username usertype firstname lastname enabled', function (err, data) {
        
        if (err || data == undefined) return res.status(400).json(result.faildata);
        if (data.length === 0) return res.status(401).json(result.authenticationerror);
        if (data.length > 1) return res.status(401).json(result.authenticationerror);
        if (data.length === 1) {
            if (data[0].enabled === true && (data[0].usertype === 'user' || data[0].usertype === 'admin')){
                var resData = {
                    userid: data[0].userid,
                    username: data[0].username,
                    usertype: data[0].usertype,
                    enabled: data[0].enabled,
                    firstname:data[0].firstname,
                    lastname:data[0].lastname,
                };
                result.success.result = resData;
                if (!ucookie) {
                    var randomNumber = Math.random().toString();
                    Users.update(query, {$set:{login:{ucookie: randomNumber, ucreated: Date.now()}}}, function(errup, dataup){
                        if (errup  || dataup.n == 0 || data.nModified == 0) return res.status(401).json(result.authenticationerror);
                        var d = new Date((new Date().getTime() + 60000));
                        res.cookie('_u', randomNumber, { maxAge: 6000000, expires: d, httpOnly: true });
                        result.success.cookie = { '_u': randomNumber, maxAge: 6000000, expires: d, httpOnly: true }
                        return res.status(200).json(result.success);
                    });
                } else {
                    return res.status(200).json(result.success);
                }
            } else {
                return res.status(200).json(result.authenticationerror);
            }
        }
    });
};

exports.logOutUser = function (req, res, next) {
    var result = response;
    var query;
    if(req.body.cookies) {
        var ucookie = req.body.cookies._u;
        
        query = {'login.ucookie': ucookie,'usertype':'user'}
    } else {
        query = {username:req.body.username , password: req.body.password,usertype:'user'}
    }

    Users.find(query, 'username usertype enabled', function (err, data) {
        
        if (err || data == undefined) return res.status(400).json(result.faildata);
        if (data.length === 0) return res.status(401).json(result.authenticationerror);
        if (data.length > 1) return res.status(401).json(result.authenticationerror);
        if (data.length === 1) {
            Users.update(query, {$set:{login: { ucookie: null, ucreated: null}}}, function(errup, dataup){
                if (errup || dataup.n == 0 || data.nModified == 0) return res.status(401).json(result.authenticationerror);
                return res.status(200).json(result.success);
            });
        }
    });
};

exports.loginAdmin = function (req, res, next) {
    var result = response;
    var query;
    if(req.body.cookies) {
        //if()
        var acookie = req.body.cookies._a;
        query = {'login.acookie': acookie,usertype:'admin'}
    } else {
        query = {username: req.body.username, password: req.body.password,usertype:'admin'}
    }

    Users.find(query, 'username usertype enabled', function (err, data) {       
        if (err || data == undefined) return res.status(400).json(result.faildata);
        if (data.length === 0) return res.status(401).json(result.authenticationerror);
        if (data.length > 1) return res.status(401).json(result.authenticationerror);
        if (data.length === 1) {
            if (data[0].enabled === true && (data[0].usertype === 'admin')){
                
                var resData = {
                    username: data[0].username,
                    usertype: data[0].usertype,
                    enabled: data[0].enabled
                };
                result.success.result = resData;
                
                if (!acookie) {
                    var randomNumber = Math.random().toString();
                    Users.update(query, {$set:{login:{acookie: randomNumber, acreated: Date.now()}}}, function(errup, dataup){
                        if (errup  || dataup.n == 0 || data.nModified == 0) return res.status(401).json(result.authenticationerror);
                        var d = new Date((new Date().getTime() + 60000));
                        res.cookie('_a', randomNumber, { maxAge: 6000000, expires: d, httpOnly: true });
                        result.success.cookie = { '_a': randomNumber, maxAge: 6000000, expires: d, httpOnly: true }
                        return res.status(200).json(result.success);
                    });
                } else {
                    return res.status(200).json(result.success);
                }
            } else {
                return res.status(401).json(result.authenticationerror);
            }
        }
    });
};

exports.logOutAdmin = function (req, res, next) {
    var result = response;
    var query;
    if(req.body.cookies) {
        
        if(req.body.cookies._a !=undefined){
        var acookie = req.body.cookies._a;
        query = {'login.acookie': acookie,usertype:'admin'}
        }
        else {
        query = {username:req.body.username , password: req.body.password,usertype:'admin'}
            }
    } else {
        query = {username:req.body.username , password: req.body.password,usertype:'admin'}
    }
    
    Users.find(query, 'username usertype enabled', function (err, data) {
                
        if (err || data == undefined) return res.status(400).json(result.faildata);
        if (data.length === 0) return res.status(401).json(result.authenticationerror);
        if (data.length > 1) return res.status(401).json(result.authenticationerror);
        if (data.length === 1) {
            Users.update(query, {$set:{login: { acookie: null, acreated: null}}}, function(errup, dataup){
                if (errup || dataup.n == 0 || data.nModified == 0) return res.status(401).json(result.authenticationerror);
                return res.status(200).json(result.success);
            });
        }
    });
};

exports.registerUser = function (req, res, next) {
    var result = response;
    var createData = {
        username: req.body.username,
        password: req.body.password,
        usertype: req.body.usertype,
        enabled:req.body.enabled,
        created:req.body.created,
        firstname:req.body.firstname,
        lastname:req.body.lastname
    }
    
    Users.create(createData, function (err, data) {
        
        if (err) return res.status(500).json(result.error);
        var resData = {
            username: data.username,
            usertype: data.usertype,
            enabled: data.enabled
        };
        result.success.result = resData;
        return res.status(200).json(result.success);
    });

};
