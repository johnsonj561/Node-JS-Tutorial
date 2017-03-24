// Reading from buffers
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde


// Converting Buffer to JSON
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);


// Comparing Buffers
// buf.compare(otherBuffer);
// returns a number indicating whether it comes before or after or is the same as otherBuffer
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
  console.log(buffer1 + ' comes before ' + buffer2);
}
else if(result == 0) {
  console.log(buffer1 + ' is same as ' + buffer2);
}
else{
  console.log(buffer1 + ' comes after ' + buffer2);
}


// Copy Buffers
// buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
// returs no value. Copies data from region of this buffer to regon of target buffer
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log('buffer2 content: ' + buffer2.toString());


// Slicing Buffers
// buf.slice([start][, end])
// returns a new buffer which references the same memory as the old one, offset and cropped by the start and end
var buffer1 = new Buffer('TutorialsPoint');
var buffer2 = buffer1.slice(0, 9);
console.log('buffer2 content: ' + buffer2.toString());


// Buffer length
// buf.length
var buffer = new Buffer('TutorialsPoint');
console.log('buffer length: ' + buffer.length);


// Methods Reference

// Buffer.isEncoding(encoding) returns true if encoding is a valid encoding argument
// Buffer.isBuffer(obj) returns true if object is buffer
// Buffer.byteLength(string[, encoding]) gives byte length of a string, defaults to utf8
// Buffer.concat(list[, totalLength]) returns a buffer which is the resulf of concatentating all buffers in list
// Buffer.compare(buf1, buf2) 
