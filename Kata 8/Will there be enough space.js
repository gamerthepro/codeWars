// Instructions

// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting


function enough(cap, on, wait) {
	let p = on + wait;
	if (cap <= p) {
		return p;
	} else return 0;
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
// describe("Basic Tests", function(){
// 6
//   it("Testing for fixed tests", () => {
// 7
//     assert.strictEqual(enough(10, 5, 5), 0);
// 8
//     assert.strictEqual(enough(100, 60, 50), 10);
// 9
//     assert.strictEqual(enough(20, 5, 5), 0);
// 10
//   });
// 11
// });
// 12
​