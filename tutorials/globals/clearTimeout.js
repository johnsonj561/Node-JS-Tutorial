console.log('\nprintHello() is scheduled to be called after 3 seconds\nIt will be cleared and never called');

var delay = 3000;
function printHello() {
  console.log('\nHello World!\n');
}

var t = setTimeout(printHello, delay);

clearTimeout(t);

