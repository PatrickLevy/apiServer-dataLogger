var mongoose = require('mongoose'),
    tempReadings = mongoose.model('tempReadings');

// Find all
exports.findAll = function(req, res){
    tempReadings.find({},function(err, results) {
        return res.send(results);
    });
};

// Create
exports.import = function(req, res){
    tempReadings.create(
        {
            _id: 'fakeDataId100',
            temp: 83,
            time: '2017-06-03T03:46:36.003Z',
        },
        {
            _id: 'fakeDataId200',
            temp: 85,
            time: '2017-06-07T03:46:36.003Z',
        },
        {
            _id: 'fakeDataId300',
            temp: 87,
            time: '2017-06-10T03:46:36.003Z',
        },
        {
            _id: 'fakeDataId400',
            temp: 89,
            time: '2017-06-13T03:46:36.003Z',
        },
        {
            _id: 'fakeDataId500',
            temp: 81,
            time: '2017-06-15T03:46:36.003Z',
        }
        , function (err) {
            if (err) return console.log(err);
            return res.send(202);
        });
};