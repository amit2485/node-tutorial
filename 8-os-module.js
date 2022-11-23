//Built in modules
const os = require('os');

//info of current user
const user = os.userInfo();

//method returns of ssystem uptime in seconds

console.log(`This system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);
