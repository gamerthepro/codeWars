// Instructions
// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]


function countBy(x, n) {
	const result = [];
	for(let i = x, times = n; times > 0; i += x) {
		result.push(i);
		times--;
	}
	return result;
}


function countBy(x, n) {
	const result = [];
	for(let i = 1; i <= n; i++) {
	  result.push(i * x);
	}
	return result;
}


// Sample Tests:

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic Tests",function(){
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
//     assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")
//   });
// });
