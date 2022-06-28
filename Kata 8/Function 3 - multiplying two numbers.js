// Function 3 - multiplying two numbers

// Instructions

// Implement a function which multiplies two numbers.


const multiply = (x, y) => x * y;


// Sample Tests

const chai = require('chai');
const assert = chai.assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(multiply(2, 3), 6);
  });
});