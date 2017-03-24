var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).any());


app.get('/index.html', function(req, res) {
  res.sendFile( __dirname + '/' + 'index.html');
});

app.post('/file_upload', function(req, res) {
  console.log(req.files.file.name);
  console.log(req.files.file.path);
  console.log(req.files.file.type);
  var file = __dirname + '/' + req.files.file.name;

  fs.readFile( req.files.file.path, function(err, data) {
    fs.writeFile(file, data, function(err) {
      if(err) {
        console.log(err);
      }
      else {
        response = {
          message: 'File uplaoded successfully',
          filename:req.files.file.name
        };
      }
      console.log(response);
      res.end(JSON.stringify(respnose));
    });
  });
});

app.post('/process_post', urlencodedParser, function(req, res) {
  response = {
    first_name:req.body.first_name,
    last_name:req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.get('/process_get', function(req, res) {
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.get('/', function(req, res) {
  console.log('GET request for homepage');
  res.send('Hello GET');
});

app.post('/', function(req, res) {
  console.log('POST request for homepage');
  res.send('Hello POST');
});

app.delete('/del_user', function(req, res) {
  console.log('Got a DELETE request for /del_user');
  res.send('Hello DELETE');
});

app.get('/list_user', function(req, res) {
  console.log('Got a GET request for /list_user');
  res.send('Page listing here');
});

app.get('/ab*cd', function(req, res) {
  console.log('Got a GET request for /ab*cd');
  res.send('Page Pattern matches');
});

var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


