// syntax for reading data from Node buffer
// buf.toString([encoding][, start][, end])
// encoding default is utf8
// start is beginning index to start reading, default 0
// end is end index to end reading, default is complete buffer
// returns string from buffer data encoded using specified character set

// EXAMPLE

buf = new Buffer(26);

for(var i = 0; i < 26; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));
console.log( buf.toString('ascii', 0, 5));
console.log( buf.toString('utf8', 0, 5));
console.log( buf.toString(undefined, 0, 5));

