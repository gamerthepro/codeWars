// Grasshopper - Debug sayHello

// Instructions

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:


const sayHello = name => `Hello, ${name}`


// Sample Tests

describe("Tests", () => {
	it("test", () => {
 Test.assertEquals(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
 Test.assertEquals(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
 Test.assertEquals(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
 Test.assertEquals(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')
	});
 });