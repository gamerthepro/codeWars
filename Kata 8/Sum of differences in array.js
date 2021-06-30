// Instructions

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).


function sumOfDifferences(arr) {
	const sorted = arr.sort((a, b) => b - a);
	let sum = 0;
	for (let i = 1; i < sorted.length; i++) {
		sum += sorted[i - 1] - sorted[i];
	}
	return sum;
}


// Sample Tests:
// 1
// describe("sumOfDifferences([1, 2, 10]", function() {
// 2
//   Test.assertEquals(sumOfDifferences([1, 2, 10]), 9);
// 3
// });
// 4
// ​
// 5
// describe("sumOfDifferences([-3, -2, -1])", function() {
// 6
//   Test.assertEquals(sumOfDifferences([-3, -2, -1]), 2);
// 7
// });
// 8
​