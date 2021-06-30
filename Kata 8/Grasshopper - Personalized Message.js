// Instructions

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
// FUNDAMENTALSCONDITIONAL STATEMENTSCONTROL FLOWBASIC LANGUAGE FEATURES


function greet (name, owner) {
	if (name === owner) {
		return 'Hello boss';
	} 
	return 'Hello guest';
}


// Sample Tests:
// 1
// describe("Tests", () => {
// 2
//   it("test", () => {
// 3
// Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
// 4
// Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
// 5
//   });
// 6
// });
// 7
​