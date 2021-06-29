// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


const reverseSeq = n => {
	let arr = [];
	for (let i = n; i > 0; i--) {
		arr.push(i);
	}
	return arr;
};


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
// describe("reverseSeq", function() {
// 6
// 	it("Sample Test", function() {
// 	7
// 		assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
// 	8
// 	});
// 9
// });