// EventEmitter is a class (emitter is bộ phát)
const EventEmitter = require('events');

// Create an instance of this class
const emitter = new EventEmitter();
class Logger {
    // If we define a function inside a class, don't need to write function keyword
    log(mess) {
        console.log(mess);
        emitter.emit('messageLogged', 'arg1', 2);
    }
}

module.exports = Logger