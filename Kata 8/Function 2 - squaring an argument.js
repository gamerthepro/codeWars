// Function 2 - squaring an argument

// Instructions

// Now you have to write a function that takes an argument and returns the square of it.


const square = n => n * n;

const square = n => Math.pow(n, 2);


// Sample Tests

describe("Tests", () => {
	it("test", () => {
 Test.assertEquals(square(3), 9);
 });
 });