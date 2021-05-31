// EventEmitter is a class (emitter is bộ phát)
const EventEmitter = require('events');

// Create an instance of this class
// const emitter = new EventEmitter();

// use 'extends'to add the name of parent or the base class
// using extends kame Logger class will have all func that is defined in EventEmitter(is a part of Logger)
// => can emitter.emit => this.emit and remove: const emitter = new EventEmitter();

class Logger extends EventEmitter {
    // If we define a function inside a class, don't need to write function keyword
    log(mess) {
        console.log(mess);
        // emitter.emit('messageLogged', 'arg1', 2);
        // this references this Logger class itself which extends event emiiter
        this.emit('messageLogged', 'arg1', 2);
    }
}

module.exports = Logger