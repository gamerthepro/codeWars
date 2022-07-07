// If you can't sleep, just count sheep!!

// Instructions
// Output
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


function countSheep(num){
	if (num == 0) {
	  return ""
	}
	let arr = [];
	
	for (let i = 1; i <= num; i++) {
	  arr.push(`${i} sheep...`)
	};
	
	return arr.join('');
 }

const countSheep = function (num){
	let str = "";
	for(let i = 1; i <= num; i++) {
		str+= `${i} sheep...`; 
	}
	return str;
}



// Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countSheep(0), "");
    assert.strictEqual(countSheep(1), "1 sheep...");
    assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
  });
});