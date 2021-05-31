// EventEmitter is a class (emitter is bộ phát)
const EventEmitter = require('events');

// Create an instance of this class
const emitter = new EventEmitter();

// Register a listener
// emitter.on('messageLogged', function() {
//     console.log('add Listener')
// })

// emitter.emit('messageLogged');

// Or can use: add Listener and add arg
emitter.addListener('messageLogged',(arg1, arg2) => {
    console.log('add Listener way2', arg1, arg2)
})

// OP: 3 http://
emitter.on('messageLogged2', (object) => {
    console.log(object.id, object.url2)
})

const logger = require('./emitterLogger');
logger.log()

// Making a noise, produce - signalling 
// Raise an event
// emitter.emit('messageLogged', 'arg1', 2);

// emitter.emit('messageLogged2', {id: 3, url2: 'http://'})