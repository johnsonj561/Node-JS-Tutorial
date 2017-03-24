// events module
var events = require('events');

// create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// create an event handler as follows
var connectHandler  = function connected() {
  console.log('connection succesful');

  // fire the data_received event
  eventEmitter.emit('data_received');
}

// bind connection event with handler
eventEmitter.on('connection', connectHandler);

// bind data_received event with anonymous function
eventEmitter.on('data_received', function() {
  console.log('data received succesfully');
});

// fire the connection event
eventEmitter.emit('connection');

console.log('Program Ended.');
