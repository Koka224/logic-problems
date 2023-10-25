"use strict";
// Напишите скрипт, который считает количество секунд в часе.
// function secondsInAnHour() {
//   let seconds = 60 * 60;
//   return seconds;
// }

// let seconds = secondsInAnHour();
// console.log("В одном часе " + seconds + " секунд.");

// Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.

// let currentTime = new Date();

// let hours = currentTime.getHours();
// let minutes = currentTime.getMinutes();
// let seconds = currentTime.getSeconds();

// if (hours < 10) {
//   hours = "0" + hours;
// }

// if (minutes < 10) {
//   minutes = "0" + minutes;
// }

// if (seconds < 10) {
//   seconds = "0" + seconds;
// }

// let formattedTime = hours + ":" + minutes + ":" + seconds;
// console.log("Текущее время: " + formattedTime);

// В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// Предположим, что в переменной day лежит число дня месяца
// let day =30;

// let decade = Math.floor((day - 1) / 10) + 1;

// console.log("День " + day + " попадает в " + decade + "-ю декаду месяца!");

// В переменной month лежит какое-то число из интервала от 1 до 12.
//  Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// Предположим, что в переменной month лежит номер месяца
let month = 7;

let seasons = ["зима", "весна", "лето", "осень"];

let season = "";
if ((month >= 1 && month <= 2) || month === 12) {
  season = seasons[0];
} else if (month >= 3 && month <= 5) {
  season = seasons[1];
} else if (month >= 6 && month <= 8) {
  season = seasons[2];
} else if (month >= 9 && month <= 11) {
  season = seasons[3];
}

console.log("Месяц " + month + " относится к поре года " + season + "!");
