'use strict';


const str = promt ("", ""); 
const products = str.split(", "); 
console.log(products.join (';')); 



// //создание массива 
// const arr = [1, 2, 3, 6, 8];
// // arr.pop - методы для работы с концом массива (удаления элемента в конце)
// // arr.push - добаление элемента в конец массива 
// arr.pop();
// arr.push(10); 
// console.log(arr);

// //перебрать элементы массива можно с помощью цикла 
// for (let i=0; i < arr.length; i++) { 
//     console.log(arr[i]);
// }

// 2 спопсоб перебрать 
// for (let value of arr){
//     console.log(); 
// }

// свойство length для массива 
// const bkb = [2, 3, 5 ,7 ,10]; 
// arr[90] = 0; 
// console.log(bkb.length); 
// console.log(bkb); 

// перебор массива с помощью forEach 
// const bkb = [2, 3, 5 ,7 ,10]; 
// bkb.forEach(function(item, i, bkb) { 
//     console.log(`${i}: ${item} внутри массива ${bkb}`);
// }); 


