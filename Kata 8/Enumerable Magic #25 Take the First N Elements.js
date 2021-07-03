// Instructions

// Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


const take = (arr, n) => arr.slice(0, n);



// Sample Tests:

// describe("Sample Tests", function(){
// 	it("should work for sample tests", function(){
// 	  Test.assertDeepEquals(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");
// 	});
//  });