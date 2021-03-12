// // // function firstFunc(arr, fn) {
// // //   let result = 'New value: ';

// // //   for (let i = 0; i < arr.length; i++) {
// // //     result += fn(arr[i]);
// // //   }
// // //   return result.trim();
  
// // // }

// // // function handler1(el) {
// // //   return el[0].toUpperCase() + el.slice(1);
// // // }

// // // console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

// // // function handler2(el) {
// // //   return Number(el) * 10 + ', ';
// // // }

// // // console.log(firstFunc([10, 20, 30], handler2) )

// // // function handler3(el) {
// // //   return `${el.name} is ${el.age}, `

// // // }

// // // console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

// // // function handler4(el) {
// // //   return el.split('').reverse().join('') + ', ';
// // // }

// // // console.log(firstFunc(['abs', '123'], handler4));

// // // function every(arr, fn) {
// // //   if(!Array.isArray(arr)) return new Error('Argument is not Array');
// // //   if(!fn || typeof fn !== 'function') return new Error('Argument is not a function');
// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (!fn(arr[i], i, arr)) {
// // //       return false;
// // //     }
// // //   }
// // //   return true;
// // // }

// // // function h(el) {
// // //   return typeof el === 'number'
// // // }

// // // console.log(every([4, 2, 5], h));


// // //1
// // const rectangle = {
// //   width: 20, 
// //   height: 100,
// //   getSquare: function() {
// //     return this.width * this.height;
// //   }
// // };
// // console.log(rectangle.getSquare());
// // //2
// // const price = {
// //   price: 10,
// //   discount: '15%',
// //   getPrice() {
// //     return this.price;
// //   },
// //   getPriceWithDiscount() {
// //     let res = (this.price / 100) * parseFloat(this.discount);
// //     let newPrice = this.price - res;
// //     return newPrice;
// //   }
// // };
  
// //   console.log(price.getPrice()); // 10
// //   console.log(price.getPriceWithDiscount()); // 8.5
// //   //3 
// //   const dom = {
// //     height: 20,
// //     up: 5,
// //     upHeight() {
// //       return this.height + this.up;
// //     }
// //   }

// //   console.log(dom.upHeight());
// // // 4

// // const numerator = {
// //   value: 1,
// //   double: function () {
// //     this.value *= 2
// //     return this;
// //   },
// //   plusOne: function () {
// //     this.value += 1
// //     return this;
// //   },
// //   minusOne: function () {
// //     this.value -= 1
// //     return this;
// //   },
  
// // }
// // numerator.double().plusOne().plusOne().minusOne();
// // console.log(numerator.value); // 3

// // //5

// // const prod1 = {
// //   price: 10,
// //   itemProducts: 100,
// //   countItem() {
// //     return this.price * this.itemProducts;
// //   }
// // };
// // const result5 = prod1.countItem();
// // console.log(result5);

// // // 6

// // const prod2 = {
// //   price: 20,
// //   itemProducts: 75
// // };
// // prod2.countItem = prod1.countItem;
// // console.log(prod2.countItem());



// // //7
// // let sizes = {
// //   width: 5,
// //   height: 10
// // };
// // getSquare = function () {
// //   return this.width * this.height;
// // };
// // const r7 = getSquare.call(sizes);
// // console.log(r7);

// // //8
// // let element = {
// //   height: 25,
// //   getHeight: function () {
// //     return this.height;
// //   }
// // };

// // let getElementHeight = element.getHeight.bind(element);
// // console.log(getElementHeight());

// const plus = (x, y) => x + y;
// const res = plus(1,3);
// console.log(res);

// const objFun = (str = '') => ({
//   value: str,
//   length: str.length
// });

// console.log(objFun('hello world'));

// const obj2 = {
//   firstName: 'Serhii',
//   Age: 30,
//   getObj: null,
//   getF() {
//     this.getObj = () => console.log(this);
//   }
// };
// obj2.getF();
// obj2.getObj();


// // function sum() {
// //   const params = Array.prototype.slice.call(arguments);
// //   if (!params.length) return 0;
// //   return params.reduce(function (prev, next) { return prev + next; });
// // }
// const sum = (...params) => {
//   if (!params.length) return 0;
//   const reducer = (prev, next) => prev + next;
//   return params.reduce(reducer);
// }; 
//   console.log(sum(1, 2, 3, 4));// 10
//   console.log(sum());// 0 
 

//  const convertToObject = (num) => ({
//   value: num,
//   isOdd: Boolean(num % 2)
//  });
//  console.log(convertToObject(9));


const users = [
  {
    name: 'Sergey',
    age: 26,
    gender: 'male',
    company: 'Luxoft',
    total: 40.54,
    email: 'dew@gmail.com',
    phone: '+380979786275',
    isActive: true,
    registered: '2020-20-07'
  },
  {
    name: 'Olga',
    age: 27,
    gender: 'female',
    total: 10.45,
    company: 'Xerjx',
    email: 'dew@gmail.com',
    phone: '+380979786275',
    isActive: false,
    registered: '2020-20-07'
  },
  {
    name: 'Andrey',
    age: 30,
    gender: 'male',
    total: 20.45,
    company: 'FormTV',
    email: 'dew@gmail.com',
    phone: '+380979786275',
    isActive: true,
    registered: '2020-20-10'
  }
];
// Методы масивов -- //forEach, //filter, // map, //reduce, //some/every, sort, find/

// Метод forEach//
// users.forEach((user, i, arr) => {
//   console.log(user, i, arr);
// });
//Метод filter

const userLess30 = users.filter(user => user.age < 30);
//console.log(userLess30);
const userActive = users.filter(user => user.isActive);
//console.log(userActive);
//Map
const userName = users.map(user => ({name: user.name, age: user.age}));
//console.log(userName);

// Reduce
const totalBalance = users.reduce((acc, user) => acc += user.total, 0);
//console.log(totalBalance);
//Создание обьекта с масива
const userObj = users.reduce((acc, user) => {
  acc[user.name] = user;
  return acc;
}, {});
//console.log(userObj);
//Some, every
const userGender = users.some((user) => user.gender === 'male');
const isAll18 = users.every(user => user.age > 18);
//console.log(isAll18);

//Метод find
const user = users.find(user => user.name === 'Olga');
//console.log(user);

//Метод сортировки Sort
// const name = ['Denis', 'Anna', 'Bill'];
// name.sort();
// //console.log(name);
// const numArr = [1, 10, 44, 32, 5, 7];
// numArr.sort((prev, next) => prev - next);
// users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
// console.log(users);

// //Заdание по масивам 
// //1 
// const arr = [1,2,3,5,8,9,10];
// const newArr = arr.map(num => ({digit: num, odd:Boolean(num % 2)}));
// console.log(newArr);

// //2
// const arr2 = [12, 4, 50, 1, 0, 18, 40];
// const resArr2 = arr2.some((num) => num === 0);
// console.log(resArr2);
// //3
// const arrStr = ['yes', 'hello', 'no', 'easycode', 'what'];
// const resArr3 = arrStr.every((num) => num.length > 3);
// console.log(resArr3);
//4
// const arrStringIndex = [
//   {char:"a",index:12},
//   {char:"w",index:8},
//   {char:"Y",index:10},
//   {char:"p",index:3},
//   {char:"p",index:2},
//   {char:"N",index:6},
//   {char:" ",index:5},
//   {char:"y",index:4},
//   {char:"r",index:13},
//   {char:"H",index:0},
//   {char:"e",index:11},
//   {char:"a",index:1},
//   {char:" ",index:9},
//   {char:"!",index:14},
//   {char:"e",index:7}
// ];
// //arrStringIndex.slice();
// const resStrArr = arrStringIndex.sort((prevIndex, nextIndex) => prevIndex.index - nextIndex.index).reduce((acc, { char }) => acc + char, '');
// console.log(resStrArr);

// function getStr(arr) {
//   const cloned = arr.slice();
 
//   return cloned
//     .sort((prev, next) => prev.index - next.index)
//     .reduce((acc, { char }) => acc + char, '');
// }

//console.log(getStr(arrStringIndex));

//5
// const newArrString = [ [14, 45], [1], ['a', 'c', 'd'] ]; //[ [1], [14, 45], ['a', 'c', 'd'] ];
// newArrString.sort((prevLength, nextLength) => prevLength.length - nextLength.length);
//console.log(newArrString);
//6
// const computer = [
//   { cpu: 'intel',
//     info: {
//     cores:2,
//     сache: 3
//     }
//   },
//   { cpu: 'intel',
//     info: {
//      cores:4,
//      сache: 4
//     }
//   },
//   { cpu: 'amd',
//     info: {
//      cores:1,
//      сache: 1
//     }
//   },
//   { cpu: 'intel',
//     info: {
//      cores:3,
//      сache: 2
//     }
//   },
//   { cpu: 'amd',
//     info: {
//      cores:4,
//      сache: 2
//     }
//   }
// ];
// computer.sort((infoprev, infonext) => infoprev.info.cores - infonext.info.cores);
//console.log(computer);
//7
// let products = [
//   { title: 'prod1',
//     price: 5.2
//   },
//   { title: 'prod2',
//     price: 0.18
//   },
//   { title: 'prod3',
//     price: 15
//   },
//   { title: 'prod4',
//     price: 25
//   },
//   { title: 'prod5',
//     price: 18.9
//   },
//   { title: 'prod6',
//     price: 8
//   },
//   { title: 'prod7',
//     price: 19
//   }, 
//   { title: 'prod8',
//     price: 63
//   }
// ];
// function filterCollection(arr, priceOne, priceTwo) {
//   return arr.filter(({price}) => price >= priceOne && price <= priceTwo)
//   .sort((price1, price2) => price1.price - price2.price);
  
// }
//console.log(filterCollection(products, 15, 30));


// ЗАМЫКАНИЯ ТЕМА
// function getName(firstName, lastName) {
//   //console.log(firstName, lastName);
//   return function() {
//     return `${firstName} ${lastName}`;
//   }
// }
// const name = getName('Sergey', 'Mel');
// //console.log(name());

// // Замыкания Задания
// // 1
// function updateN(val = 0) {
//   let x = val;
//   return function(num = 0) {
//     return x -= num;
//   }
// }
// const upVal = updateN()(6);
// console.log(upVal);


// function closuExample() {
//   const arrFn = [];
//   let value = '';
//   for(let i = 0; i < 10; i++) {
//     value += i;
//     arrFn.push(function(){
//       console.log(value, i);
//     });
//   }
//   return arrFn;
// }
// const r23 = closuExample();

// //1
// function minus(value = 0) {
//   let x = value;
//   return function(numVal = 0) {
//     return x -= numVal;
//   }
// }
// const c = minus()(10);
// console.log(c);

// //2
// function multiplyMaker(val = 2) {
//   let x = val;
//   return function(num = 1) {
//     return x *= num;
//   }
// }
// const resnum = multiplyMaker(2);
// console.log(resnum(2));
// console.log(resnum(1));
// console.log(resnum(3));
// console.log(resnum(10));

// //3
// function mod() {
//   return {
//     a(val) {
//       return val;
//     },
//     i(valS) {
//       if(valS = '') {
//         return valS;
//       }
//     },
//     ii(valN) {
//       if(valN === !isNaN()) {
//         return String(valN);
//       }
//     },
//     b(valStr) {
//       return valStr;
//     },
//     c(valLength) {
//       return valLength.length;
//     },
//     d(valReverse) {
//       return valReverse.split('').reverse().join('');
//     }
//   }
// }
// const resmod = mod().d('ase');
// console.log(resmod);

// //4
//  function nMod (){
//   let num = 0;
//   return {
//     setNumber(val = 0) {
//       num = Number(val);
//       return this;
//     },
//     plus(val) {
//       num += Number(val);
//       return this;
//     },
//     minus(val) {
//       num -= Number(val);
//       return this;
//     },
//     devide(val) {
//       num /= Number(val);
//       return this;
//     },
//     power(n = 2) {
//       num = Math.pow(num, n);
//       return this;
//     },
//     getN() {
//       return  Number(num.toFixed(2)) || 0;
//     }
//   }
// }
//console.log(nMod().setNumber(3).power(2).getN());

// Методы работы с обьектами

// let obj = {
//   name: 'Sergey',
//   info: {
//     skills: ['Html', 'Css', 'Sass'],
//   }
// };
// let obj1 = {
//   age: 39,
// };
// Глубокое копирование через Json.
// let newObj = Object.assign({}, obj, obj1);
// newObj = JSON.parse(JSON.stringify(obj));
// console.log(newObj.info === obj.info);
// // Глубокое копирование через Json.

// let keys = Object.keys(obj1);
// console.log(keys);
// let values = Object.values(obj);
// console.log(values);
// let entries = Object.entries(obj);
// console.log(entries);
// let fromEntries = Object.fromEntries([['a', 'value'], ['b', 'b_value']]);
// console.log(fromEntries);

// // Деструктуризация обьектов и не только
// const dev = {
//   firstName: 'Sergey',
//   lastName: 'Melnychuk',
//   info: {
//     job: 'Soft',
//     skills: ['Html', 'css', 'Js'],
//   }
// };
// //Деструктуризация ниже Обьектов
// const {firstName, lastName} = dev;
// console.log(firstName, lastName);
// const {info: { job, skills}} = dev;
// console.log(skills);

// //Деструктуризация масивов
// const colors = ['red', 'white', 'blue'];
// const [r, w, blue] = colors;
// //console.log(r, w, blue);
// const names = ['Sergey', 'Olga', 'Andrey'];
// const [, name1, name2] = names;
// //console.log(name1, name2);
// const someArr = ['hello', ['key', 'value']];
// const [,[key, value]] = someArr;
// console.log(key, value);
// const nam = ['Andrey', 'Olga', 'Ivan'];
// const [name, ...otherName] = nam;
// console.log(otherName);
// const[...newName] = nam;
// console.log(...newName);
// //Сложение двух масивов
// const colorsN = [...colors, ...nam];
// console.log(colorsN);
// //Копирование обьектов поверхностное
// const newDev = {...dev};
//console.log(newDev);

// function newPersone({lastName, firstName, info:{ skills } = {}}) {
//   console.log(skills);
// }
// newPersone(newDev);

// function foo(x,y,...others) {
//   console.log(arguments);
//   const [...arg] = arguments;
//   console.log(others);
// }
// foo(1,2,3,4,5,6);

// const numbersArr = [1,2,3];
// function foo2(a,b) {
//   console.log(a,b);
// }
// foo2(...numbersArr);

// //1
// function func(first,oth) {
//   return {
//     first, oth
//   }
// }
// const firstOth = (first, ...oth) => ({ first, oth});
// console.log(func('a','b','c','d'));

// //2
// const organisation = {
//   name: 'Google',
//   info: {
//      employees: ['Vlad', 'Olga'],
//      partners: ['', 'Facebook', 'Xing'],
//     },
// };


// //2

// function getInfo({name = 'Unknow',info: { partners: [first = 'default', two = 'default'] = [] }}) {
//   console.log(`Name: ${name}`);
//   console.log(`Partners: ${first}, ${two}`);
// }
// getInfo(organisation);



// let userFrednly = {

//   guid: "dd969d30-841d-436e-9550-3b0c649e4d34",
//   isActive: false,
//   balance: "$2,474.46",
//   age: 30,
//   eyeColor: "blue",
//   name: "Tameka Maxwell",
//   gender: "female",
//   company: "ENOMEN",
//   email: "tamekamaxwell@enomen.com",
//   phone: "+1 (902) 557-3898",
//   tags: [
//     "aliquip",
//     "anim",
//     "exercitation",
//     "non",
//   ],

//   friends: [
//     {
//       id: 0,
//       name: "Barber Hicks"
//     },
//     {
//       id: 1,
//       name: "Santana Cruz"
//     },
//     {
//       id: 2,
//       name: "Leola Cabrera"
//     }
//   ],
// };
// const {name,balance,email} = userFrednly;
// console.log(name, balance, email);
// const {tags: [one, , , last]} = userFrednly;
// console.log(one, last);
// const {friends: [{name}]} = userFrednly;
// console.log(name);
// //4
// const newUs = [...userFrednly.tags, ...userFrednly.friends];
// console.log(newUs);

//Object description
const car = {
  brand: 'BMW',
  year: 2020,
  get age() {
    return `Car created ${this.year}`;
  },
  set age(value) {
    this.year = value;
  },
};
Object.defineProperty(car, 'age', {
  //configurable: false,
  //enumerable: false,
  //writable: false,
  get: function(){
    return `Car created ${this.year}`;
  }
});
//Как найти гдоюадбную переменную в window
console.log(typeof null);


Object.defineProperty(window, 'globalVar', {
  set: function(value) {
    console.log(value);
    //debugger;
  }
});





