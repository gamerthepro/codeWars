// Training JS #1: create your first JS function and print "Hello World!"

// Instructions

// In JavaScript, your code is running in a function, let us step by step complete your first JS function.

// Look at this example:

//       --------keyword "function"
//       |       ----your function name  
//       |       |    ---if needed, some arguments will appear in brackets
//       |       |    |
//     function myfunc(){  ---------your function code will starting with "{"
//       //you should type your code here
//     }----------------------------ending with "}"



function helloWorld() {
	const str = "Hello World!";
	console.log( str );
}



// Sample Tests

describe("Tests", () => {
	it("test", () => {
Test.expect(helloWorld, "function helloWorld is not defined")
helloWorld();
		});
});