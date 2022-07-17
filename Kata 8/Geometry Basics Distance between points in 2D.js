// Geometry Basics: Distance between points in 2D

// Instructions
// Output
// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.



const distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y)



// Sample Tests

describe("Solution", function(){
	it("should pass these sample tests", function(){
	  Test.assertApproxEquals(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)), 0);
	  Test.assertApproxEquals(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)), 5);
	  Test.assertApproxEquals(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6), 10.728001);
	});
 });