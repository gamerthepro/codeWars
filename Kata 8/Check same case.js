// Check same case

// Instructions

// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


const sameCase = (a, b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1; 


// Sample Tests

const {assert} = require("chai");

function doTest(a, b, expected){
  it(`Testing for "${a}" and "${b}"`, function() {
    assert.strictEqual(sameCase(a,b), expected, `For sameCase("${a}","${b}")`);
  });
}
