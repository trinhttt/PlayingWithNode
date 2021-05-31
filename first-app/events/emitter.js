// EventEmitter is a class (emitter is bộ phát)
// const EventEmitter = require('events');

// Create an instance of this class
// const emitter = new EventEmitter();

const Logger = require('./emitterLogger');
const logger = new Logger();
logger.log('Trynh zz')


// Register a listener
// emitter.on('messageLogged', function() {
//     console.log('add Listener')
// })

// emitter.emit('messageLogged');

// Or can use: add Listener and add arg
// *NOTE: use another EventEmitter instance EventEmitter but still listen signal
logger.addListener('messageLogged',(arg1, arg2) => {
    console.log('add Listener way2', arg1, arg2)
})

// OP: 3 http://
logger.on('messageLogged2', (object) => {
    console.log(object.id, object.url2)
})


// logger.log()

// Making a noise, produce - signalling 
// Raise an event
// emitter.emit('messageLogged', 'arg1', 2);

// emitter.emit('messageLogged2', {id: 3, url2: 'http://'})