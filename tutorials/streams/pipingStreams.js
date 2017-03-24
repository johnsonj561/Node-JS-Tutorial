var fs = require('fs');
var inputFile = 'text.txt';
var outputFile = 'output.txt';

var readerStream = fs.createReadStream(inputFile);

var writerStream = fs.createWriteStream(outputFile);

// pipe the read and write operations
readerStream.pipe(writerStream);

console.log('Program ended');
