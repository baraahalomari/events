'use strict';
const uuid = require('uuid').v4;
const faker = require('faker');
const event = require('../events');
let store = (process.env.STORE||'1-206-flowers');
require('../driver');
require('../vendor');
require('../logger');
describe('event handler tests', () => {
    beforeEach(()=>{
        jest.useFakeTimers();
        jest.spyOn(global.console,'log');
      })
    let order = {
        orderId: uuid(),
        storeName: store,
        customerName: faker.name.findName(),
        address:faker.address.streetAddress(),
    }
    test('pick up handler test',() => {
        event.emit('pickup',order)
        jest.runAllTimers();
        expect(console.log).toHaveBeenCalled();
    })
    test('delivered handler test',() => {
        event.emit('delivered',order)
        expect(console.log).toHaveBeenCalled();
    })
    test('in-transit handler test',() => {
        event.emit('in-transit',order)
        jest.runAllTimers();
        expect(console.log).toHaveBeenCalled();
    })
})