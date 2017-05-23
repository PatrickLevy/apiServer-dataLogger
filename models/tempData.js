var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TempDataSchema = new Schema({
    _id: String,
    temp: Number,
    time: Date
});

mongoose.model('tempReadings', TempDataSchema);