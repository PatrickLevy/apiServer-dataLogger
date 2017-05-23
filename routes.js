module.exports = function(app){
    var musicians = require('./controllers/musicians');
    var tempData = require('./controllers/tempData');
    app.get('/musicians', musicians.findAll);
    app.get('/musicians/:id', musicians.findById);
    app.post('/musicians', musicians.add);
    app.put('/musicians/:id', musicians.update);
    app.delete('/musicians/:id', musicians.delete);
    app.get('/import', musicians.import);
    app.get('/tempData', tempData.findAll);
    app.get('/importTempData', tempData.import);
};
