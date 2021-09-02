//* Rest parameters from functions и обьязан идти последним в функции

function funRest(a, b, ...numbers) {
  console.log(numbers);//* в масив numbers попадет 4 
}
funRest(1,2,4);
//* Spred Operator в масивах

const arr = [1, 2, 4, 6];//* найти максимальное число в масиве c Spred
const arr2 = [1, 7, 10];
const res = Math.max(...arr, ...arr2);
//console.log(res);//* 10

//* Object destructuring Деструктуризация обьектов

const person = {
  name: {
    first: 'Sehii',
    last: 'Melnychuk',
  },
  age: 29,
};
// const firstName = person.firstName;
// const lastName = person.lastName;
//*С помощью Деструктуризации

const {name: { first: firstName, last: lastName }} = person;
//console.log(firstName, lastName);

function connect({ host = 'localhost', port = 12345, user = 'guest'} = {}) {

}

connect({
  host: 'localhost',
  port: 3380,
  user: 'Srhii',
});
//* Деструктуризация в масивах 

const arrNumber = [1, 3, 5, 10, 11, 15];
const [a, b, c] = arrNumber;
const [, d, , e] = arrNumber;//* 3 , 10
//console.log(d, e);//* 1, 3, 5;

//* Двумерный масив
const arrNum = [[12, 15], [14, 45]];
const [[onex, oney], [twox, twoy]] = arrNum;
//console.log(onex, oney, twox, twoy); //* 12 15 14 45

//* Objects
const x = 10;
const y = 15;
// Записать у обьект свойства x, y так
const p = {x, y};

//*Копировать опции из одного обьекта в другой
const defOptions = {
  host: 'localhost',
  user: 'Admin',
  dbName: 'blog'
};

const userOptions = {
  user: 'Srhii',
  password: '1212343'
};

const result = Object.assign({}, defOptions, userOptions); //Поверхносное копирование обьектов - shallow-copy
//console.log(result);

//* Оператор Оbject Spread

const optionAdmin = {
  host: 'localhost',
  user: 'Admin',
  dbName: 'admin-root'
}
const optionUser = {
  user: 'User',
  password: '43434545'
}
const result12 = Object.assign({}, optionAdmin, optionUser);

// На Spread operator
const resUser = {...optionAdmin, ...optionUser};
console.log(resUser);

//* Class in ES6

//Функция Конструктор для создания Класса

function Animal(name, voice) {
  this.name = name;
  this.voice = voice;
}

Animal.prototype.say = function() {
  //console.log(this.name, 'does', this.voice);
}

const dog = new Animal('dog', 'woof');
dog.say();

//* Создание обьектов через Класс в Es6

class User {
  constructor(name, voise) {
    this.name = name;
    this.voise = voise;
  }
  say() {
    console.log(this.name, 'does', this.voise);
  }
}
//personUser -> Admin.prototype -> User.prototype -> Object.prototype -> null
class Admin extends User {
  constructor(name, voise, cleanCode) {
    super(name, voise);
    super.say();
    this.cleanCode = cleanCode;
  }
}

const personUser = new Admin('Serhii', 'Hey Whats up!', true);
personUser.say();

//* Class Properties
class Counter {
  
}




