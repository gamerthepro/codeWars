// Upper <body> Strength

// Instructions

// Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
// He can do ten kata in an hour, but when he makes a mistake, he must do pushups. These pushups really tire poor Alex out, so every time he does them they take twice as long. His first set of redemption pushups takes 5 minutes. Create a function, alexMistakes, that takes two arguments: the number of kata he needs to complete, and the time in minutes he has to complete them. Your function should return how many mistakes Alex can afford to make.


function alexMistakes(n, t){
	let count = 0
	let start = 5
	let time = (t - n * 6)
	while (time - start >= 0) {
		count++
		time -= start
	  start *= 2
	}
	return count
}


// Sample Tests

describe("Tests", () => {
	it("test", () => {
 Test.assertEquals(alexMistakes(10, 120), 3);
 Test.assertEquals(alexMistakes(11, 120), 3);
 Test.assertEquals(alexMistakes(3, 45), 2);
 Test.assertEquals(alexMistakes(8, 120), 3);
 Test.assertEquals(alexMistakes(6, 60), 2);
 Test.assertEquals(alexMistakes(9, 180), 4);
	});
 });