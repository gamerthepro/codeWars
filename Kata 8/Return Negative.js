// Return Negative

// Instructions

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12


const makeNegative = num => num <= 0 ? +num : -num


// Sample Tests

describe("Tests", () => {
	it("test", () => {
 Test.assertEquals(makeNegative(42), -42);
	});
 });