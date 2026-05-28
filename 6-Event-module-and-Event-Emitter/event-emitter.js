const EventEmitter = require('events');

const emitter = new EventEmitter();

// Greet Example
emitter.on('greet', () => {
    console.log("Hello event triggered");
});


emitter.emit('greet');

// Passing data through events
emitter.on('userLogin', (username) => {
    console.log(`${username} logged in...`);  
});

emitter.emit('userLogin', 'Banumathi');

// Multiple parameters
emitter.on('orderPlaced', (orderId, product) => {
    console.log("Order ID is " + orderId);
    console.log(`Product is ${product}`);
});

emitter.emit('orderPlaced', 1002, 'Laptop');

// Multiple Listeners
emitter.on('paymentSuccess', () => {
    console.log("Send Invoice");
});

emitter.on('paymentSuccess', () => {
    console.log("Send Email");
});

emitter.on('paymentSuccess', () => {
    console.log("Update Database");
});

emitter.emit('paymentSuccess');