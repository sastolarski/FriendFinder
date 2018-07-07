
var path = require('path');
var friends = require('../data/friends.js');

module.exports = function (app) {



    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../../public/survey.html'));
    });
    

    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../../public/home.html'));
    });

    app.post('/api/friends', function(req, res) {
		
        var userInput = req.body;
        
        friends.push(userInput);
    })
}