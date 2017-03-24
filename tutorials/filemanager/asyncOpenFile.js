// fs.open(path, flags[, mode], callback)
// path string having file name
// flags = behavior of the file to be opened
// mode = permission and sticky bits
// callback function gets two arguments error and data

// flags
// r reading
// r+ reading and writing
// rs reading in synchronous mode
// rs+ reading and writing  in synchronouse mode
// w writing
// wx like'w' but fails if path exists
// w+ open file for reading and writing
// wx+ like 'w+'but fails if path exists
// a open for appending
// ax like 'a' but fails if path exists
// a+ open for reading and appending
// ax+ like a+ but fails if path exists

var fs = require('fs');

// async open
console.log('going to open the file!');
fs.open('input.txt', 'r+', function (err, fd) {
  if(err) {
    return console.error(err);
  }
  console.log('File Uploaded Successfully!');
});


//  fs.stat(path, callback) 
// stats.isFile() returns true if simple file
// stats.isDirectory() returns true if file is directory
// stats.isBlockDevice() returns true if block device
// stats.isCharacterDevice() returns true if character device
// stats.isSymbolicLink()
// stats.isFIFO()
// stats.isSocket()

console.log('Going to get file info!');
fs.stat('input.txt', function(err, stats) {
  if(err) {
    return console.error(err);p
  }
  console.log(stats);
  console.log('Got file info succesffully!');
  
  console.log('isFile ? ' + stats.isFile());
  console.log('isDirectory ? ' + stats.isDirectory());
});
