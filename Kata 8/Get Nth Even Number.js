// Get Nth Even Number

// Instructions

// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.



const nthEven = n => (n - 1) * 2;



// Sample Tests

describe("Tests", () => {
	it("test", () => {
 // Basic Tests
 
 Test.assertEquals(nthEven(1), 0, "Wrong Value!");
 Test.assertEquals(nthEven(2), 2, "Wrong Value!");
 Test.assertEquals(nthEven(3), 4, "Wrong Value!");
 
 Test.assertEquals(nthEven(100), 198, "Wrong Value!");
 Test.assertEquals(nthEven(1298734), 2597466, "Wrong Value!");
 
	});
 });
 