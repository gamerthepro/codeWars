// Нечетные маршевые биты 8 бит

// Инструкции

// Нечетные биты готовятся к битвам бит.

// Следовательноn, биты маршируют справа налево по 8битовому пути. Как только самый значимый бит достигает левого, их марш завершается. Каждый шаг будет сохранен в виде массива 8целых чисел.

// Возвращает массив всех шагов.

// 1 <= n <= 8

// ПРИМЕЧАНИЕ: n != 0, потому nчто представляет число 1s.

// Примеры
// Это напоминает простой 8 светодиодный индикатор:

// n = 3

// 00000111
// 00001110
// 00011100
// 00111000
// 01110000
// 11100000
// n = 7

// 01111111
// 11111110

// Решение


function bitMarch (n) {
	let zeroes = 8 - n;
	let steps = [[...Array(8)].map((item, i) => i < zeroes ? 0 : 1)];
	for(let i = 1; i <= zeroes; i++) {
		steps.push(steps[i - 1].reduce((byte,curBit,i,lastStep) => [...byte,lastStep[i + 1] ? 1 : 0], []))
	}
	return steps;
}


// Примеры тестов

const chai = require('chai');
chai.config.truncateThreshold = 0;
const deepEqual = chai.assert.deepEqual;

describe("Tests", function () {
	it("sample tests", function () {
		deepEqual(bitMarch(1), [
			[ 0, 0, 0, 0, 0, 0, 0, 1 ],
			[ 0, 0, 0, 0, 0, 0, 1, 0 ], 
			[ 0, 0, 0, 0, 0, 1, 0, 0 ],
			[ 0, 0, 0, 0, 1, 0, 0, 0 ],
			[ 0, 0, 0, 1, 0, 0, 0, 0 ], 
			[ 0, 0, 1, 0, 0, 0, 0, 0 ],
			[ 0, 1, 0, 0, 0, 0, 0, 0 ],
			[ 1, 0, 0, 0, 0, 0, 0, 0 ],
		]);
		deepEqual(bitMarch(2), [
			[ 0, 0, 0, 0, 0, 0, 1, 1 ],
			[ 0, 0, 0, 0, 0, 1, 1, 0 ], 
			[ 0, 0, 0, 0, 1, 1, 0, 0 ],
			[ 0, 0, 0, 1, 1, 0, 0, 0 ],
			[ 0, 0, 1, 1, 0, 0, 0, 0 ], 
			[ 0, 1, 1, 0, 0, 0, 0, 0 ],
			[ 1, 1, 0, 0, 0, 0, 0, 0 ],
		]);
		deepEqual(bitMarch(3), [
			[0, 0, 0, 0, 0, 1, 1, 1, ],
			[0, 0, 0, 0, 1, 1, 1, 0, ],
			[0, 0, 0, 1, 1, 1, 0, 0, ],
			[0, 0, 1, 1, 1, 0, 0, 0, ],
			[0, 1, 1, 1, 0, 0, 0, 0, ],
			[1, 1, 1, 0, 0, 0, 0, 0, ],
		]);
	});
});