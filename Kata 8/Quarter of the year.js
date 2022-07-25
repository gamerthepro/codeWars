// Quarter of the year

// Instructions

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;


const quarterOf = month => Math.ceil(month/3);

const quarterOf = month => month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4; 


// Sample Tests

describe("Basic Tests", () =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(quarterOf(3), 1)
    assert.strictEqual(quarterOf(8), 3)
    assert.strictEqual(quarterOf(11), 4)
  });
});