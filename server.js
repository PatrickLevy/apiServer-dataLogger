var express = require('express'),
    mongoose = require('mongoose'),
    fs = require('fs');
var bodyParser = require('body-parser');

var mongoUri = 'mongodb://testUser:t3stpw@ds151018.mlab.com:51018/temperature';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
    throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();

// app.configure(function(){
//   app.use(express.bodyParser());
// });
app.use(bodyParser());

require('./models/musician');
require('./models/tempData');
require('./routes')(app);

app.listen(3001);
console.log('Listening on port 3001...');