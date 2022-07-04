// Volume of a Cuboid

// Instructions

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.


const Kata = {
	getVolumeOfCuboid : (length, width, height) => length * width * height
 }


class Kata {
	static getVolumeOfCuboid(length, width, height) {
	  return length * width * height;
	}
 }


// Sample Tests

describe("Tests", () => {
	it("test", () => {
 Test.assertEquals(Kata.getVolumeOfCuboid(1,2,2), 4);
 Test.assertEquals(Kata.getVolumeOfCuboid(6.3,2,5), 63);
	});
 });
 