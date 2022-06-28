// Even or Odd

// Instructions

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


const even_or_odd = number => number % 2 == 0 ? "Even" : "Odd";


// Sample Tests

const chai = require('chai');
const assert = chai.assert;

describe("Sample tests",() => {
  
  it("2 is even", () => {
    assert.strictEqual(even_or_odd(2), "Even");