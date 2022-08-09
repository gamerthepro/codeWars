// get character from ASCII Value

// Instructions

// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'



const getChar = c => String.fromCharCode(c)



// Sample Tests

describe("Tests", () => {
	it("test", () => {
 Test.assertEquals(getChar(55),'7')
 Test.assertEquals(getChar(56),'8')
 Test.assertEquals(getChar(57),'9')
 Test.assertEquals(getChar(58),':')
 Test.assertEquals(getChar(59),';')
 Test.assertEquals(getChar(60),'<')
 Test.assertEquals(getChar(61),'=')
 Test.assertEquals(getChar(62),'>')
 Test.assertEquals(getChar(63),'?')
 Test.assertEquals(getChar(64),'@')
 Test.assertEquals(getChar(65),'A')
	});
 });