// Instructions

// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: the sides must be integers


const cubeChecker = (volume, side) => {
	if (volume <= 0 || side <= 0) return false;
	return Math.cbrt(volume) === side;
};


// Sample Tests:
// 1
// describe("Tests", () => {
// 2
//   it("test", () => {
// 3
// Test.assertEquals(cubeChecker(56.3, 1), false);
// 4
// Test.assertEquals(cubeChecker(-1, 2), false);
// 5
// Test.assertEquals(cubeChecker(8, 3), false);
// 6
// Test.assertEquals(cubeChecker(8, 2), true);
// 7
// Test.assertEquals(cubeChecker(-8,-2), false);
// 8
// Test.assertEquals(cubeChecker(0, 0), false);
// 9
// Test.assertEquals(cubeChecker(1, 5),  false);
// 10
// Test.assertEquals(cubeChecker(125, 5), true);
// 11
// Test.assertEquals(cubeChecker(125,-5), false);
// 12
// ​
// 13
//   });
// 14
// });
// 15
​