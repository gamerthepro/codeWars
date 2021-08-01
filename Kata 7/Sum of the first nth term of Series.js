// Instructions
// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
// NOTE: In PHP the function is called series_sum().


function SeriesSum(n) {
	if (!n) return '0.00';
	let sum = 1, j = 4;
	for (let i = 1; i < n; i++) {
		sum += 1 / j;
		j += 3;
	}
	return sum.toFixed(2);
}


// Sample Tests:
// describe("Tests", () => {
// 	it("test", () => {
//  Test.assertEquals(SeriesSum(1), "1.00")
//  Test.assertEquals(SeriesSum(2), "1.25")
//  Test.assertEquals(SeriesSum(3), "1.39")
//  Test.assertEquals(SeriesSum(4), "1.49")
// 	});
//  });