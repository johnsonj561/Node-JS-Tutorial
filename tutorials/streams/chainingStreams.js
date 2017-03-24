// chaining connects output of one stream to another stream and allow
// chaining of multiple stream operations

var fs = require('fs');
var zlib = require('zlib');

var inputFile = 'text.txt';

// compress the file
fs.createReadStream(inputFile)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log('File Compressed');


// decompress the file
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input_decompressed.txt'));


console.log('File Decompressed');
