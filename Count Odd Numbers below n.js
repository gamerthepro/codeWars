// Given a number n, return the number of positive odd numbers below n, EASY!

// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
// Expect large Inputs!



function oddCount(n){
	return Math.floor(n / 2);
}


// Sample Tests:

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//    it("Testing for fixed tests", () => {
// 		assert.strictEqual(oddCount(15), 7, "Oops! Wrong.");
// 		assert.strictEqual(oddCount(15023), 7511, "Oops! Wrong.");
// 	});
// });
