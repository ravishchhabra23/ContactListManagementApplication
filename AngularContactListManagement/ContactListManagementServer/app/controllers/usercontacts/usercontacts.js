var UserContacts = require('../../models/models').Contacts;
var Users = require('../../models/models').Users;
var response = require('../responses/response').structure;

exports.getUserContacts = function(req,res,next){
    var result = response;
    Users.find({userid:req.headers.userid},'userid username firstname lastname usertype createdby created enabled',function(err,data){
        if(err){return res.status(401).json(result.authenticationerror);}
        if (data  == undefined || data.length == 0){
        return res.status(400).json(result.faildata)
    }
        UserContacts.find({userid:data[0].userid},'userid username contactid email mobile homephone workphone permanentaddress temporaryaddress',function(err,resdata){
        
        if(err){res.status(400).json(result.faildata)}
        result.success.result = resdata;
        return res.status(200).json(result.success);
    })
    })    
};
exports.getUserFromCookie = function(req,res,next){
    var result = response;
    var query;
     if(req.body.cookies._u) {
        var ucookie = req.body.cookies._u;
        query = {'login.ucookie': ucookie}
    }
    else{
        return res.status(401).json(result.authenticationerror)
    }
    Users.find(query, 'userid firstname lastname', function (err, data) {
        if (err || data == undefined) return res.status(400).json(result.faildata);
        if (data.length === 0) return res.status(401).json(result.authenticationerror);
        if (data.length > 1) return res.status(401).json(result.authenticationerror);
        if (data.length === 1) {
            UserContacts.find({contactid: req.params.id}, function (errr, datar) {
                if (errr || datar == undefined) return res.status(400).json(result.faildata);
                result.success.result = datar;
                return res.status(200).json(result.success);
            });
        }
    })  
};
exports.createUserContact = function(req,res,next){
    var result = response;
    var query;
     if(req.body.cookies) {
        var ucookie = req.body.cookies._u;
        query = {'login.ucookie': ucookie}
    }
    else{
        return res.status(401).json(result.authenticationerror)
    }
    Users.find(query,'userid username firstname lastname usertype created enabled',function(err,data){
        
        if(err){return res.status(401).json(result.authenticationerror);}
        if (data  == undefined || data.length == 0 || data.length>1){
        return res.status(400).json(result.faildata)
    }
        //result.success.result = datac;
        var createData={
            userid:data[0].userid,
            username: data[0].username,
            email: req.body.email,
            mobile: req.body.mobile,
            workphone: req.body.workphone,
            homephone: req.body.homephone,
            permanentaddress: req.body.permanentaddress,
            temporaryaddress: req.body.temporaryaddress
        }
        UserContacts.create(createData, function (errr, datar) {
            if (errr) return res.status(400).json(result.faildata);
            var retData = {
                _id: datar._id,
                username: datar.username,
                userid: datar.userid
            };
            result.success.result = retData;
            return res.status(200).json(result.success);
        });
    });
}

exports.deleteUserContact = function (req, res, next) {
    var result = response;
    var query;
     if(req.body.cookies) {
        var ucookie = req.body.cookies._u;
        query = {'login.ucookie': ucookie}
    }
    else{
        return res.status(401).json(result.authenticationerror)
    }
    Users.find(query, 'userid', function (err, data) {
        
        if (err || data == undefined) return res.status(400).json(result.faildata);
        if (data.length === 0) return res.status(401).json(result.authenticationerror);
        if (data.length > 1) return res.status(401).json(result.authenticationerror);
        if (data.length === 1) {
            UserContacts.remove({contactid: req.params.id}, function (errr, datar) {
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

exports.editUserContact = function (req, res, next) {
    var result = response;
    var editData ={};
    var query;
     if(req.body.cookies) {
        var ucookie = req.body.cookies._u;
        query = {'login.ucookie': ucookie}
    }
    else{
        return res.status(401).json(result.authenticationerror)
    }
    Users.find(query, 'userid', function (err, data) {
        
        if (err || data == undefined) return res.status(400).json(result.faildata);
        if (data.length === 0) return res.status(401).json(result.authenticationerror);
        if (data.length > 1) return res.status(401).json(result.authenticationerror);
        if (data.length === 1) {
            UserContacts.find({contactid:req.params.id}, 'contactid userid username', function (err, cndata) {
                
                
                if (cndata.length === 1) {
                    //if (req.body.username) {editData.username = cndata[0].username}
                    if (req.body.email) {editData.email = req.body.email}
                    if (req.body.mobile) {editData.mobile = req.body.mobile}
                    if (req.body.workphone != undefined) {editData.workphone = req.body.workphone}
                    if (req.body.homephone) {editData.homephone = req.body.homephone}
                    if (req.body.permanentaddress) {editData.permanentaddress = req.body.permanentaddress}
                    if (req.body.temporaryaddress) {editData.temporaryaddress = req.body.temporaryaddress}
                    UserContacts.update({contactid: req.params.id}, {$set: editData}, function (errr, datar) {
                    
                    if (errr) return res.status(400).json(result.faildata);
                    result.success.result = editData;
                    return res.status(200).json(result.success);
                })
                }
            })
        }
    })
};