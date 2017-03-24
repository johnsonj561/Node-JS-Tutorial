// implementing RESTful API

var express = require('express');
var app = express();
var fs = require('fs');

// GET
app.get('/listUsers', function(req, res) {
  fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
    console.log(data);
    res.end(data);
  });
});

// create new user object
var user = {
  'user4': {
    'name': 'Justin J',
    'password': 'password',
    'profession': 'developer',
    'id': 4
  }
};

// POST new user object
app.post('/addUser', function(req, res) {
  fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
    data = JSON.parse(data);
    data['user4'] = user['user4'];
    console.log(data);
    res.end(JSON.stringify(data));
  });
});


// DELETE user
app.delete('/deleteUser', function(req, res) {
  fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
    data = JSON.parse(data);
    delete data['user' + 1];
    console.log(data);
    res.end(JSON.stringify(data));
  });
});


app.get('/:id', function(req, res) {
  fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
    users = JSON.parse(data);
    var user = users['user' + req.params.id];
    console.log(user);
    res.end(JSON.stringify(user));
  });
})


var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
