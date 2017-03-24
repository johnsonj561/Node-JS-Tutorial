// get events module
var events = require('events');
var eventEmitter = new events.EventEmitter();


// define event listeners
var listener1 = function listener1() {
  console.log('listener1 executed');
}

var listener2 = function listener2() {
  console.log('listener 2 executed');
}

// bind events with listeners
// addLitener(event, listener)
eventEmitter.addListener('connection', listener1);
eventEmitter.addListener('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners + ' Listener (s) listening to connection event');

// fire connection event
eventEmitter.emit('connection');

// remove the binding of listener 1 function
eventEmitter.removeListener('connection', listener1);
console.log('Listener1 will not listen now');

// fire the connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners + ' Listener(s) listening to connection event');

console.log('Program ended'); 





