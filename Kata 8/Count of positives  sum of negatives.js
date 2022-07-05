// Count of positives / sum of negatives

// Instructions

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


const countPositivesSumNegatives = input => input && input.length ? input.reduce((prev,curr) => (curr > 0 ? prev[0] = prev[0] + 1 : prev[1] = prev[1] + curr, prev), [0,0]) : [];


function countPositivesSumNegatives(input) {
	if (input == null || input == 0)
	  return []
	let positiveCounter = 0;
	let sumNegativeCounter = 0;
	for (let i = 0, l = input.length; i < l; i++) {
	  if (input[i] > 0) 
		positiveCounter++;
	  else sumNegativeCounter += input[i];
	}
	
	  return [positiveCounter, sumNegativeCounter];
 }


// Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
  it("Testing for fixed test 1", () => {
    let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let actual = countPositivesSumNegatives(testData);
    let expected = [10, -65];
    assert.deepEqual(actual, expected);
  })
    
  it("Testing for fixed test 2", () => {
    let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    let actual = countPositivesSumNegatives(testData);
    let expected = [8, -50];    
    assert.deepEqual(actual, expected);
  });
});