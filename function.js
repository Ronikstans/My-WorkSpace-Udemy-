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


