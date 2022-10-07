// Инструкции

// Ты в зоопарке... все сурикаты выглядят странно. Что-то пошло не так - кто-то пошел и поменял местами головы и хвосты!

// Спасите животных, вернув их обратно. Вам будет предоставлен массив, который будет иметь три значения (хвост, тело, голова). Ваша задача - перестроить массив так, чтобы животное было правильным (голова, тело, хвост).

// То же самое касается всех других массивов / списков, которые вы получите в тестах: вы должны изменить позиции элементов с той же точной логикой

// Решение


const fixTheMeerkat = arr => arr.reverse();


// Выборочные тесты

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.deepEqual(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
    assert.deepEqual(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
    assert.deepEqual(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
    assert.deepEqual(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
    assert.deepEqual(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);
  })
})