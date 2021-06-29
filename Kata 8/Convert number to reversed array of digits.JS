// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]


function digitize(n) {
	return n.toString().split('').reverse().map(Number)
}


// Sample Tests:
// 1
// const chai = require("chai");
// 2
// const assert = chai.assert;
// 3
// chai.config.truncateThreshold=0;
// 4
// ​
// 5
// describe("Basic tests", () => {
// 6
// 	it("Testing for fixed tests", () => {
// 7
// 		assert.deepEqual(digitize(35231),[1,3,2,5,3]);
// 8
// 	});
// 9
// });
// 10
​