'use strict';

const events = require('./events');

events.on('pickup',(order)=>{loggerHandler('pickup',order)});
events.on('in-transit',(order)=>{loggerHandler('in-transit',order)});
events.on('delivered',(order)=>{loggerHandler('delivered',order)});

function loggerHandler (events,order){
  console.log('EVENT: ',{events,time:new Date().toLocaleString(),order})
}