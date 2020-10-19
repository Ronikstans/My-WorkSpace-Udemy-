'use strict';

// # Методы и свойства строк и чисел

const str = "test";
const arr = [1, 2, 3];

console.log(str.length);
console.log(arr.length);

// Методы изменения регистра 
// любой метод обязательно ставить круглые скобки в конце 
// Верхний регистр 
const str = "test";

console.log(str.toLocaleUpperCase()); 
console.log(str); 

// Нижний регистр 

const str = "test";

console.log(str.toLocaleLowerCase()); 
console.log(str); 

//Метод поиска внутри строке (использование данного метода для опредления искомого значения в строке)

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

// Метод Slice 

const logg = "Hello world!"; 
console.log(logg.slice(6, 10)); 

const hhh = "Box to Box";
console.log(hhh.slice(1, 4));

// Метод substring (как и slice, но не поддерживает отрицательные значения)

console.log(hhh.substring(6, 11));

// Метод substr указание элементов сколько необходимо вырезать 

console.log(hhh.substr(1, 3)); 

// Метод math. - математические методы для применения в консоли 
// Пример округления переменной = Num 
const num = 12.2; 
console.log(Math.round(num)); 

// parseInt переводит число в другую систему исчесления 
const test = "12.2px"; 
console.log(parseInt(test));

// parseFloat возвращает строку в десятичном значении 
console.log(parseFloat(test));