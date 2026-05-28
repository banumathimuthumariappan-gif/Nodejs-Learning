const os = require('os');

console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Hostname: " + os.hostname());
console.log("Total memory: " + os.totalmem());
console.log("Total memory in GB: " + os.totalmem() / 1024 / 1024 / 1024);
console.log("Free memory: " + os.freemem());
console.log("OS Uptime: " + os.uptime());






