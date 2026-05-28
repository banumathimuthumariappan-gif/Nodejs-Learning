const { log } = require('console');
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('orderPlaced', (orderId) => {{
    console.log(`Order Placed: ${orderId}`);
}});

emitter.on('orderPlaced', () => {
    console.log("Sending Email COnfirmation");
});

emitter.on('orderPlaced', () => {
    console.log("Updating Inventory");
});

emitter.on('orderPlaced', () => {
    console.log("Generating Invoice");
});

emitter.emit('orderPlaced', 1001);