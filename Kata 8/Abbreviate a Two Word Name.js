// Сокращение имени из двух слов

// Инструкции

// Напишите функцию для преобразования имени в инициалы. Это ката строго занимает два слова с одним пробелом между ними.

// Вывод должен состоять из двух заглавных букв с разделяющей их точкой.

// Это должно выглядеть так:

// Sam Harris => S.H

// patrick feeney => P.F


const abbrevName = name => name.split(" ").map(x => x[0].toUpperCase()).join(".")


// Примеры тестов

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    assert.strictEqual(abbrevName("David Mendieta"), "D.M");
  });
});
