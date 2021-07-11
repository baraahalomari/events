'use strict';
const events = require('./events');

events.on('pickup',pickupHandler);

function pickupHandler(order){
  setTimeout(()=>{
    console.log(`DRIVER: pickup ${order.orderID}`);
    events.emit('in-transit',order);
  },1000);
  setTimeout(()=>{
    console.log(`DRIVER: picked up ${order.orderID}`);
    events.emit('delivered',order);
  },3000)
}