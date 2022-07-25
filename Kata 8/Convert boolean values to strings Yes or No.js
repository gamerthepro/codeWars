// Convert boolean values to strings 'Yes' or 'No'.

// Instructions

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// const { assert } = require("chai")



const boolToWord = bool => bool ? 'Yes' : 'No';


// Sample Tests

describe("Basic tests", () => {
  it("Testing for basic tests", () => {
    assert.strictEqual(boolToWord(true), 'Yes')
    assert.strictEqual(boolToWord(false), 'No')
    });
  });