<<<<<<< HEAD
"use strict";

let num = 20; // глобальная переменная 
function showFirstMessage() {
    console.log("hello world!");
    let num = 10;  // локальная переменная 
}

showFirstMessage();
console.log(num);


function calc (a, b){
    return(a+b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 31));



function ret(){
    let num = 50;

    //


    return num;
}

const anotherNum = ret(); 
console.log(anotherNum);




const logger = function(){
    console.log("hello");
};

logger();

const calcs = (a, b) => { return a + b } ;


=======
let a = 3;

function addTwo(x) {
  let ret = x + 2;
  return ret;
}
let b = addTwo(a);
console.log(b);



let val1 = 2;

function multiplyThis(n) {
  let ret = n * val1;
  return ret;
}
let multiplied = multiplyThis(6);
console.log('example of scope:', multiplied);



let val = 7;

function createAdder() {
  function addNumbers(a, b) {
    let ret = a + b;
    return ret;
  }
  return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log('example of function returning a function: ', sum);
>>>>>>> fb78cb038dad477a0d6142887055e1528492ccce
