"use strict";
// Если переменная test равна true, то выведите 'Верно',
//  иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false.
//   Напишите два варианта скрипта - с короткой записью и с длинной.
// 1 вариант
// const text = prompt("введите true или false ");
// if (text === "true") {
//   alert("верно");
// } else {
//   alert(" не верно");
// }
// вариант 2
// let text = prompt("false or true");

// text == "true" ? alert("Верно") : alert("Неверно");

/*Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.*/
// вариант 1
// const text = prompt("введите true или false ");
// if (text != "true") {
//   alert("верно");
// } else {
//   alert(" не верно");
// }
// вариант 2
let text = prompt("false or true");

text != "true" ? alert("Верно") : alert("Неверно");
