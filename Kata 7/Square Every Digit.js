// Возведите в квадрат каждую цифру

// Инструкции

// Добро пожаловать. В этом ката вас просят возвести в квадрат каждую цифру числа и объединить их.

// Например, если мы запустим 9119 через функцию, получится 811181, потому что 9 2 равно 81, а 1 2 равно 1.

// Примечание: функция принимает целое число и возвращает целое число

// Решение


const squareDigits = num => +String(num).split("").map(el => (+el) ** 2).join("");


// Примеры тестов

const { assert } = require("chai")

describe("Basic tests", () => {
  
  it("squareDigits(3212) should equal 9414", () => {
    assert.strictEqual(squareDigits(3212), 9414);
  });

  it("squareDigits(2112) should equal 4114", () => {
    assert.strictEqual(squareDigits(2112), 4114);
  });

  it("squareDigits(0) should equal 0", () => {
    assert.strictEqual(squareDigits(0), 0);
  });
})
