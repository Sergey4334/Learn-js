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
console.log(onex, oney, twox, twoy); //* 12 15 14 45



