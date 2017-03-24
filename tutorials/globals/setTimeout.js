// setTimeout(callback, milliseconds)
// runs callback after time has ellapsed
// actual delay may vary based on OS timer and system load

var delay = 3000;
console.log('\nProgram running...\nFunction printHello() will run after delay of ' + 
	delay + 'ms has elapsed\n');

function printHello() {
  console.log('Hello World!');
}

setTimeout(printHello, delay);
