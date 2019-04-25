
const express = require('express');
var path = require('path');  

var status = require('./app/status');
var index = require('./app/index');
var programme = require('./app/programme');
const app = express();

app.set('views', path.join(__dirname, 'views'));  

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use('/health', status);
app.use('/programme', programme);
app.use('/', index);


var port = process.env.PORT || 8080;

var server = app.listen(port, function () {
   console.log('Listening on port ' +port );
});

module.exports = { 
    app: app, 
    server: server 
}; //for testing
