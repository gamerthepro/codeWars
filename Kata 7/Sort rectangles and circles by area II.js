// Сортировка прямоугольников и кругов по области II

// Инструкции

// В этом ката вам будет предоставлена последовательность размеров прямоугольников (последовательность с шириной и длиной) и окружностей (радиус - просто число).
// Ваша задача - вернуть новую последовательность измерений, отсортированных по возрастанию по площади.

// Например,

// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
// sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
// Это ката, вдохновленное сортировкой прямоугольников и кругов по площади.

// Решение


const sortByArea = array => [...array].sort((a,b) => (typeof a == "number" ? Math.PI * a ** 2 : a[0] * a[1]) - (typeof b == "number" ? Math.PI * b ** 2 : b[0] * b[1]));


// Примеры тестов

const {assert,config} = require("chai"); config.truncateThreshold = 0;

describe("Sort by area",()=>{
  it("Example tests",()=>{  
    assert.deepEqual( sortByArea([ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]), [ [1.342, 3.212], 1.23, [4.23, 6.43], 3.444 ] );
    assert.deepEqual( sortByArea([ [2, 5], 6 ]), [ [2, 5], 6 ]);
    assert.deepEqual( sortByArea([]), [] );
  });
});