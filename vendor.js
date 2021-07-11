'use strict';
const events = require('./events');

const faker = require('faker');
const uuid = require('uuid').v4;
const interval = setInterval(function () {
  // method to be executed;

  let order = {
    store: process.env.STORE,
    customer: faker.name.findName(),
    orderID: uuid(),
    addres: faker.address.streetAddress()
  }

  events.emit('pickup', order)

}, 5000);
// clearInterval(interval); // thanks @Luca D'Amico
events.on('delivered',deliverHandler);
function deliverHandler(order){
  console.log(`Thank You for delivering ${order.orderID}`)
}