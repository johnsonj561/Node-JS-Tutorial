var fs = require('fs');
var data = '';
var inputFile = 'text.txt';

// create readable stream
var readerStream = fs.createReadStream(inputFile);

// set encoding to utf8
readerStream.setEncoding('UTF8');

// handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
  data += chunk;
});

readerStream.on('end', function() {
  console.log(data);
});

readerStream.on('error', function() {
  console.log(data);
});

readerStream.on('error', function(err) {
  console.log(err.stack);
});

console.log('Program Ended');
