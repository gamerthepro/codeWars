// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'


function solution(str){
	let s = '';
	for  (let i = str.length - 1; i >= 0; i--) {
		s += str[i];
	}
	return s;
}

function solution(str){
	let s = '';
	for  (let i = 0; i < str.length; i++) {
		s = str[i] + s;
	}
	return s;
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
// 		assert.strictEqual(solution('world'), 'dlrow');
// 8
// 		assert.strictEqual(solution('hello'), 'olleh');
// 9
// 		assert.strictEqual(solution(''), '');
// 10
// 		assert.strictEqual(solution('h'), 'h');
// 11
// 	});
// 12
// });