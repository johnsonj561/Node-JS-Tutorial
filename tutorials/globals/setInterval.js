console.log('\nprintHello will be called repeatedly using setInterval(cb, ms)\nPress ctrl+c to close\n');

var interval = 2000;

function printHello() {
  console.log('Hello world!');
}

setInterval(printHello, interval);
