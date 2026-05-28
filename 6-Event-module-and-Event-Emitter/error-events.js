const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('error', (error) => {
    console.log(error.message);
});

emitter.emit('error', new Error('Something went wrong'));
