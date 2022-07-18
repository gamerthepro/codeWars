// Wilson primes

// Instructions

// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.



const amIWilson = p => [5,13,563].indexOf(p) > -1



// Sample Tests

const chai = require("chai");
const assert = chai.assert;

describe("Tests", function() {
  it("Fixed tests", function() {
     assert.strictEqual(amIWilson(5), true)
     assert.strictEqual(amIWilson(9), false)
     assert.strictEqual(amIWilson(6), false)
  });
});