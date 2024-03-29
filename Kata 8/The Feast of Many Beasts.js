// Пир многих зверей

// Инструкции

// У всех животных праздник! Каждое животное приносит одно блюдо. Существует только одно правило: блюдо должно начинаться и заканчиваться теми же буквами, что и название животного. Например, большая голубая цапля приносит чесночный наан, а синица - шоколадный торт.

// Напишите функциюfeast, которая принимает имя животного и блюдо в качестве аргументов и возвращает true или false, чтобы указать, разрешено ли животному приносить блюдо на праздник.

// Предположим, что beastи dishвсегда являются строчными строками, и каждая из них содержит не менее двух букв. beastи dishможет содержать дефисы и пробелы, но они не будут отображаться в начале или конце строки. Они не будут содержать цифр.

// Решение


const feast = (beast, dish) => beast[0] == dish[0] &&  beast[beast.length - 1] == dish[dish.length - 1];


// Примеры тестов

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(feast("great blue heron", "garlic naan"), true)
Test.assertEquals(feast("chickadee", "chocolate cake"), true)
Test.assertEquals(feast("brown bear", "bear claw"), false)
  });
});
