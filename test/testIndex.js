const index = require('../index.js');
const assert = require('chai').assert;

describe('Index Functions', () => {
  it('Returns a User Object', () => {
  	assert.typeOf(index.sayHello(), 'Object');
  });
});