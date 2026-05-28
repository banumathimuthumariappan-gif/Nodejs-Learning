const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('task', () => {
    setTimeout(() => {
        console.log("Task Completed after 2 seconds");
    }, 2000);
});

emitter.emit('task');
console.log("Application continues");
