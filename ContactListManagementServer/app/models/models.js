var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence');
//mongoose.connect("mongodb://localhost:27017/usercontactsdb");
mongoose.connect('mongodb://localhost:27017/usercontactsdb', {useMongoClient: true});


var Schema = mongoose.Schema;

var usersSchema = new Schema({
    username: {type: String, index: {unique: true}},
    password: String,
    firstname:String,
    lastname:String,
    usertype: { type: String, default: 'user' },
    createdby: String,
    created: { type: Date, default: Date.now },
    enabled:Boolean,
    login: {
        status: { type: Boolean, default: false },
        acookie: { type: String, default: null },
        acreated: { type: Date, default: null },
        ucookie: { type: String, default: null },
        ucreated: { type: Date, default: null }
    }
});
usersSchema.plugin(AutoIncrement, {inc_field: 'userid',startAt:1});

exports.Users = mongoose.model('users', usersSchema);

var contactsSchema = new Schema({
    userid:String,
    username: String,
    email: String,
    mobile: Number,
    workphone: String,
    homephone: String,
    permanentaddress: String,
    temporaryaddress: String
});
contactsSchema.plugin(AutoIncrement, {inc_field: 'contactid'});
exports.Contacts = mongoose.model('usercontacts', contactsSchema);


