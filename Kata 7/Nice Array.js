// Хороший набор

// Инструкции

// A Nice arrayопределяется как массив, где для каждого значения nв массиве также есть элемент n - 1или n + 1в массиве.

// примеры:

// [2, 10, 9, 3] is a nice array because

//  2 =  3 - 1
// 10 =  9 + 1
//  3 =  2 + 1
//  9 = 10 - 1

// [4, 2, 3] is a nice array because

// 4 = 3 + 1
// 2 = 3 - 1
// 3 = 2 + 1 (or 3 = 4 - 1)

// [4, 2, 1] is a not a nice array because

// for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
// Напишите функцию с именем isNice/IsNice, которая возвращаетtrue, если ее аргумент массива является хорошим массивом, иначе false. Пустой массив не считается хорошим.

// Решение


const isNice = arr => Boolean(arr.length) && arr.every(e => arr.includes(e - 1) || arr.includes(e + 1))


// Примеры тестов

const assert=require('chai').assert

describe("Nice Array", ()=>{
  it("simple test", () =>{
    assert.strictEqual(isNice([2,10,9,3]),true);
    assert.strictEqual(isNice([3,4,5,7]),false);
  });
});