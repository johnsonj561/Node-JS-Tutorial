// syntax to concatenate buffers
// Buffer.concat(list[, totalLength])
// list = array list of buffer objects to concatenate
// totalLength = this is total length of buffers when concatenated

// EXAMPLE
var buffer1 = new Buffer('TutorialsPoint');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('Buffer 3 Content: ' + buffer3.toString());
