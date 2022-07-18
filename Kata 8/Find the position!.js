// Find the position!

// Instructions

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"



function position(letter) {
	const alphubet = "abcdefghijklmnopqrstuvwxyz"
	return "Position of alphabet: " + (alphubet.indexOf(letter) + 1)
}



// Sample Tests

describe("Tests", () => {
	it("test", () => {
 Test.assertEquals(position("a"),"Position of alphabet: 1");
 Test.assertEquals(position("z"),"Position of alphabet: 26");
 Test.assertEquals(position("e"),"Position of alphabet: 5");
	});
 });