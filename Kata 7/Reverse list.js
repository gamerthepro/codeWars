// Обратный список

// Инструкции

// Напишите функцию reverseList, которая просто переворачивает списки.

// Решение

const reverseList = arr => arr.reverse();

// Примеры тестов

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
describe("Tests", () => {
  it("test", () => {
		assert.deepEqual(reverseList([]), []);
		assert.deepEqual(reverseList([1,2,3]), [3,2,1]);
  });
});