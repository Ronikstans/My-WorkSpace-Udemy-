'use strict';

let a = 5,
    b = a;

b = b + 5; 

console.log(a);
console.log(b);


const obj = {
    a: 5, 
    b: 1
}

const copys = obj; // передача значения по ссылке 

copys.a = 10; 
console.log (copys); 
console.log (obj); 

// использование циклов 

function copy (mainObj){ 
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key]; 
    }

    return objCopy; 
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x:7,
        y:4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10; 
numbers.c.x = 1; 
console.log (newNumbers);
console.log (numbers);


// размещение значение внутри существуещего объекта 
const add = { 
    d:17, 
    i:20
}; 

// console.log (Object.assign(numbers, add ));

const clone = Object.assign({}, add); 
clone.d = 20;

console.log(add);
console.log(clone);


//метод создания копии  массива и ее изменения с помощью newArray[1] = 'adasdasfaf' 
const oldArray = ['a', 'b', 'c']; 
const newArray = oldArray.slice(); 

newArray[1] = 'adasdasfaf'; 
console.log(oldArray);
console.log(newArray);

// Новые стандарыт ES6. Объединение нескольких массивов в одну структуру 
const video = ['youtube', 'vimeo', 'rutube'], 
    blogs = ['wordpress', 'livejournal', 'blogger'], 
    internet = [...video, ...blogs, 'vk', 'facebook']; // синтексес для вытаскивания элементов из массива 

console.log (internet); 

//Пример посложеней 
function log (a, b, c) { 
     console.log(a);
     console.log(b);
     console.log(c);
}

const num = [2, 5, 7]; 

log (...num); 

// 4 способ спрет оператор 

const array = ['a', 'b', 'c']; 
const newAarray = [...array];


// С объектом 

const newObj = {...q}; 



// пример прототипирования объекта 

    const soldier = {
        health: 400,
        armor: 100,
        cash: 3000,
        sayHello: function () {
            console.log("Hello");
        }
    };

    const jonh = Object.create(soldier);


    let y = 1;
     let x = y = 2;
    console.log (x); 