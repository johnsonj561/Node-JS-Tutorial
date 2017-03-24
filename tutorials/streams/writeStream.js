var fs = require('fs');
var data = 'Learning to write Node.js';
var outputFile = 'output.txt';

// create a writable stream
var writeStream = fs.createWriteStream(outputFile);

// write the data to stream with encoding utf8
writeStream.write(data, 'UTF8');

// mark the end of file
writeStream.end();

// handle stream events -> finish, and error
writeStream.on('finish', function() {
  console.log('Write completed');
});

writeStream.on('error', function(err) {
  console.log(err.stack);
});

console.log('Program Ended');
