// Well of Ideas - Easy Version

// Instructions

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;



const well = x => {
	const good_count = x.filter(x => x == 'good').length;
	return good_count < 1 ? 'Fail!' : good_count < 3 ? 'Publish!' : 'I smell a series!';
}



// Sample Tests

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
  });
});
