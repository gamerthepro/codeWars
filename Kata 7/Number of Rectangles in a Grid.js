// Number of Rectangles in a Grid

// Instructions

// Given a grid of size m x n, calculate the total number of rectangles contained in this rectangle. All integer sizes and positions are counted.

// Examples:

// numberOfRectangles(3, 2) == 18
// numberOfRectangles(4, 4) == 100
// Here is how the 3x2 grid works (Thanks to GiacomoSorbi for the idea):

// 1 rectangle of size 3x2:

// [][][]
// [][][]
// 2 rectangles of size 3x1:

// [][][]
// 4 rectangles of size 2x1:

// [][]
// 2 rectangles of size 2x2

// [][]
// [][]
// 3 rectangles of size 1x2:

// []
// []
// 6 rectangles of size 1x1:

// []
// As you can see (1 + 2 + 4 + 2 + 3 + 6) = 18, and is the solution for the 3x2 grid.

// There is a very simple solution to this!



const numberOfRectangles = (m, n) => (((m**2) + m)*((n**2) + n))/4



// Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(numberOfRectangles(4, 4), 100, "");
    assert.strictEqual(numberOfRectangles(5, 5), 225, "");
  });  
});