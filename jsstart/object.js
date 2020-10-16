'use strict';
// Старый метод создания объекта в JS 
const obj = new Object(); 

//На текущий момент объект создается так 
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: "red"
    }
}; 

console.log(options.name);

// Удаление свойст из объекта с помощью оператора delete 

delete options.name; 
console.log(options);

//Перебрать все свойства объекта (каждое свойство называет key (т/е ключ) мы перебираем ключи объекта) 
let counter = 0;
for (let key in options){
    if (typeof(options[key]) === 'object'){
        for(let i in options[key]){
            console.log (`свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    }else {console.log (`свойство ${key} имеет значение ${options[key]}`);
    counter++;
            }
    
}
console.log(counter);
//Функции и методы, которые уже есть внутри объекта counter++ для того чтоб посчитать сколько объектов


//Получение массива со всеми ключами 
const options2 = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: "red"
    },

    makeTest: function() {
        console.log("Test");
    }

};

options2.makeTest();

const {border, bg} = options2.colors; 
console.log(border);

// console.log(Object.keys(options2).length);



//Необходимо потренироваться и собрать объект и посчитать свойства с их стороны
//Деструктуризация объекта 

