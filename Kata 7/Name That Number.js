// Инструкции

// В этом ката вам будет дано целое число диапазона0 <= x <= 99, и вам нужно будет вернуть это число, написанное на английском языке. Несколько примеров:

// nameThatNumber(4)   // returns "four"
// nameThatNumber(19)  // returns "nineteen"
// nameThatNumber(99)  // returns "ninety nine"
// Слова должны разделяться только пробелами, а не дефисами. Нет необходимости проверять параметры, они всегда будут в диапазоне [0, 99]. Убедитесь, что возвращаемая строка не содержит начальных и конечных пробелов. Удачи!


function nameThatNumber(num) {
  let ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
			teen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
			tens = [,,"twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
			str = String(num)
	return str.length < 2 ? ones[num] 
		: str[0] == 1 ? teen[num - 10] 
		: `${tens[str[0]]}${str[1] == 0 ? "" : " " + ones[str[1]]}`
}



// Примеры тестов

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function() {
  it("1", function(){
    assert.strictEqual(nameThatNumber(1), 'one');
  });
  it("52", function(){
    assert.strictEqual(nameThatNumber(52), 'fifty two');
  });
  it("21", function(){
    assert.strictEqual(nameThatNumber(21), 'twenty one');
  });
  it("99", function(){
    assert.strictEqual(nameThatNumber(99), 'ninety nine');
  });
  it("0", function(){
    assert.strictEqual(nameThatNumber(0), 'zero');
  });
  it("53", function(){
    assert.strictEqual(nameThatNumber(53), 'fifty three');
  });
  it("23", function(){
    assert.strictEqual(nameThatNumber(23), 'twenty three');
  });
  it("76", function(){
    assert.strictEqual(nameThatNumber(76), 'seventy six');
  });
});