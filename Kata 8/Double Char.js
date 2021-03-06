
// Double Char

// Instructions

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


const doubleChar = str => str.split('').map(x => x + x).join('');

const doubleChar = str => str.replace(/(.)/g, '$1$1');


// Sample Tests

describe("doubleChar", function() {
	it("works for some examples", function() {
	  Test.assertEquals(doubleChar("abcd"), "aabbccdd");
	  Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
	  Test.assertEquals(doubleChar("1337"), "11333377");
	  Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
	  Test.assertEquals(doubleChar("123456"), "112233445566");
	  Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
	});
 });