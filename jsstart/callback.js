'use strict';
//Главный шаблон callback функции 
//Просто пример последовательности действия функциии 
function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log('Я прошел этот урок!');
});



// пример с функцией done 

function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!'); 
}
learnJS ('JavaScript', done);


// Второй простой пример (обратить внимание на ``)

function learnPHP(xxx, callback){ 
    console.log(`Я учу: ${xxx}`);
    callback();
}

learnPHP('PHP', function() {
    console.log('Я прошел этот урок!');
});