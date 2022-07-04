// Reverse List Order

// Instructions

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]


const reverseList = list => list.reverse();


// Sample Tests

describe("reverseList", function(){
	it("should reverse some sample arrays", function(){
	  Test.assertSimilar(reverseList([1,2,3,4]), [4,3,2,1]);
	  Test.assertSimilar(reverseList([3,1,5,4]), [4,5,1,3]);
	});
 });