var fs = require('fs');

fs.readFile('text.txt', function(err, data) {

  if(err) {
    console.log(err.stack);
    return;
  }

  console.log(data.toString());

});

console.log('\nAsync program ended\n');
console.log('Notice how this code is executed before console.log(data)\n');

