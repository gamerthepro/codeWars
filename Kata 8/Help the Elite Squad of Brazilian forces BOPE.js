// Help the Elite Squad of Brazilian forces BOPE

// Instructions

// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets



const magNumber = info => Math.ceil(info[1] * 3 / { PT92 : 17, M4A1 : 30, M16A2 : 30, PSG1 : 5}[info[0]])



// Sample Tests

const chai = require("chai");
const assert = chai.assert;

describe("Solution", function() {
    const testCases = [
        // input, expected -- feel free to add more cases if needed
        [["PT92", 6], 2],
        [["M4A1", 8], 1],
        [["M16A2", 19], 2],
        [["PSG1", 31], 19],
        [["PT92", 19], 4],
    ];
    
    it("Should return the number of magazines a soldier needs", function() {
      for (const [input, expected] of testCases) {    
        assert.strictEqual(magNumber(input), expected);
      }
    });
});