// Испаритель дезодоранта

// Инструкции

// Эта программа проверяет срок службы испарителя, содержащего газ.

// Мы знаем содержимое испарителя (содержание в мл), процент пены или газа, теряемый каждый день (evap_per_day), и пороговое значение (пороговое значение) в процентах, за которым испаритель больше не пригоден. Все числа строго положительные.

// Программа сообщает о n-м дне (в виде целого числа), когда испаритель не будет использоваться.

// Пример:
// evaporator(10, 10, 5) -> 29
// Примечание:
// Содержимое на самом деле не обязательно в теле функции "испаритель", вы можете использовать его или не использовать, как пожелаете. Некоторые люди могут предпочесть рассуждать с содержанием, другие - только с процентами. Это зависит от вас, но вы должны сохранить его в качестве параметра, потому что в тестах он используется в качестве аргумента.

// Решение


function evaporator(content, evap_per_day, threshold){ 
  let days = 0;
  let currentLvl = 100;
  let lowestLvl = 100 * (threshold * 0.01);
  while(lowestLvl <= currentLvl) {
    days++;
    currentLvl -= (currentLvl * (evap_per_day * 0.01));
  }
  return days;
}


// Примеры тестов

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(evaporator(10,10,10),22);
  });
});