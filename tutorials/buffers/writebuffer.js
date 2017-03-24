// create an uninituated buffer of 10 octets
// var buf = new Buffer(10);

// create a Buffer from a given array
// var buf = new Buffer([10, 20, 30, 40, 50])

// create a buffer from a given string and optionally encoding type
// var buf = new Buffer('Simply Easy Learning', 'utf-8');
// utf8 is default encoding, you can use any of ascii, utf8, utf16le, ucs2, base64, hex

// syntax for writing to node buffer
// buf.write(string[, offset][, length][, encoding])
// string is data to be written
// offset is index of buffer to start writing at, default is 0
// length is number of bytes to write, default is buffer.length
// encoding default is utf8
// return value is number of octens written, if not enough space in buffer for entire string then it will be partial

// EXAMPLE
var buf = new Buffer(256);
var len = buf.write('Simply Easy Learning');

console.log('Octets written : ' + len);


