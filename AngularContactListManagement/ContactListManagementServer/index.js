const express = require('express');
const app = express();
const config = require('./app/config/config');
var routes = require('./app/routes/routes');

app.use('/', routes);

/*app.get('/',function(req,res){
    res.send('hello world');
})*/


app.listen(config.config.port,config.config.host,function(){
    console.log('application listening at port:' + config.config.port + ' and host: '
+config.config.hostname);
})
/*var express = require('express');
var app = express();
var config = require('./app/config/config').config;
var routes = require('./app/routes');

app.use('/', routes);

app.listen(config.port, config.host, function () {
    console.log('Server started at ' + config.host + ':' + config.port);
});*/
