// Сильное число (Серия специальных чисел #2)

// Инструкции

// Определение
// Сильное число - это число, сумма факториала его цифр которого равна самому числу.

// Например, 145 - это сила, поскольку 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Задача
// Учитывая число, определите, является ли оно сильным или нет, и верните либо "STRONG!!!!"или "Not Strong !!".

// Примечания
// Пройденное число всегда положительное.
// Возвращает результат в виде строки
// Ввод >> Примеры вывода
// strong_num(1) ==> return "STRONG!!!!"
// Поскольку сумма его digits' factorial(1) равна самому числу, то оно Сильное.

// strong_num(123) ==> return "Not Strong !!"
// Поскольку сумма факториала его цифр 1! + 2! + 3! = 9не равна самому числу, то оно не сильное.

// strong_num(2)  ==>  return "STRONG!!!!"
// Поскольку сумма факториала его цифр 2! = 2равна самому числу, то оно Сильное.

// strong_num(150) ==> return "Not Strong !!"
// Поскольку сумма факториала его цифр 1! + 5! + 0! = 122не равна самому числу, то оно не является сильным.

// Решение


const strong = n => [...String(n)].reduce((prev,curr) => prev + [...Array(Number(curr))].reduce((prev2,_,index) => prev2 * ++index,1),0) === n ? "STRONG!!!!" : "Not Strong !!";


// Примеры тестов

describe("Fixed Tests", () => {
  it("Testing for 1", () => {
    Test.assertEquals(strong(1), "STRONG!!!!");
  });
  it("Testing for 2", () => {
    Test.assertEquals(strong(2), "STRONG!!!!");
  });
  it("Testing for 145", () => {
    Test.assertEquals(strong(145), "STRONG!!!!");
  });
  it("Testing for 7", () => {
    Test.assertEquals(strong(7), "Not Strong !!");
  });
  it("Testing for 93", () => {
    Test.assertEquals(strong(93), "Not Strong !!");
  });
  it("Testing for 185", () => {
    Test.assertEquals(strong(185), "Not Strong !!");
  });
});