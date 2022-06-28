// String Templates - Bug Fixing #5

// Instructions

// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!



const buildString = (...template) => `I like ${template.join(', ')}!`;


//  Sample Tests

 const assert = require('chai').assert


describe('Fixed Tests', function(){
  it('Fixed Tests', function(){
    assert.strictEqual(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
    assert.strictEqual(buildString('Cheese','Milk'), 'I like Cheese, Milk!', 'Return the correct String');
    assert.strictEqual(buildString('Chocolate'), 'I like Chocolate!', 'Return the correct String');
  })
});