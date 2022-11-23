//Modules
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternate-flavor');
require('./7-mind-grenade');

const { rahul, dev } = names;

sayHi("Amit");
sayHi(dev);
sayHi(rahul);

console.log(data);