// Лишенные гласных тролли

// Инструкции

// Тролли атакуют ваш раздел комментариев!

// Обычный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.

// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными всеми гласными.

// Например, строка "Этот сайт для неудачников, ЛОЛ!" станет "Ths wbst s fr lsrs LL!".

// Примечание: для этого ката yне считается гласной.

// Решение


const disemvowel = str => str.replace(/[aeiou]/gi, '');


// Примеры тестов

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
    assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    })
  })