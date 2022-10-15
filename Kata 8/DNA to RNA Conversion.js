// Преобразование ДНК в РНК

// Инструкции

// Дезоксирибонуклеиновая кислота, ДНК, является основной молекулой для хранения информации в биологических системах. Он состоит из четырех оснований нуклеиновых кислот: гуанина ("G"), цитозина ("C"), аденина ("A") и тимина ("T").

// Рибонуклеиновая кислота, РНК, является основной молекулой-мессенджером в клетках. РНК немного отличается от ДНК своей химической структурой и не содержит тимина. В РНК тимин заменяется другой нуклеиновой кислотой урацилом ("U").

// Создайте функцию, которая преобразует заданную строку ДНК в РНК.

// Например:

// "GCAT"  =>  "GCAU"
// Входная строка может иметь произвольную длину - в частности, она может быть пустой. Гарантируется, что все входные данные будут действительными, т. Е. Каждая входная строка будет состоять только из 'G', 'C', 'A'и / или 'T'.

// Решение


const DNAtoRNA = dna  => dna.replace(/T/g, 'U');



// Выборочные тесты

const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
    });
  })