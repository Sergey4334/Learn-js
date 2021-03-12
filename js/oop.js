//* OOP v JavaScript; Одним из важных вещей в ООП является Класс и Конструктор.
//* Конструктор - функция которая служит шаблоном для построения Обьектов! Обычные фунцкии которые вызываются с оперетором 'new'
const str = new String('hello world');
console.log(str);
//* Создаем свои функции конструкторы Становиться конструктором когда вызывается с оперетором 'NEW'
//* Такие функции в javascript еще означают Классами
//* Класс - упрощенно это собственный тип данных для Обьектов. Функция конструктор является Классом!
function Product(brand, price, discount) {
  //*1 Создается новый обьект, на этот обьект устанавливается ссылка this, и функция возвращает этот обьект
  this.brand = brand;
  this.price = price;
  this.discount = discount;
  //* Создаем метод
  // this.getPriceWithDis = function () {
  //   return this.price * (100 - this.discount) / 100;
  // }
}
const apple = new Product('Apple',100,15);//* Екзымпляр данного класа.
const samsung = new Product('Samsung', 200, 23);//* Екзымпляр данного класа.
//console.log(apple, samsung);

//* Прототипы! -- это свойство обьектов которые содержат свойства и методы своих родителей! и родителей -- родителей
//* Записываем свойства и методы в прототип!
Product.prototype.getPriceWithDis = function () {
  return this.price * (100 - this.discount) / 100;
}
Product.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
}
//* Прототип- специальное свойство для любого обьекта, которое является обьектом с набором свойств и методов которые доступны для всех порожденных от этого класса - функции конструктора) екзымпляров

//* Наследование в JS
//* Object create
const protoForObj = {
  sayHello() {
    return 'Hello world';
  },
}
const obj = Object.create(protoForObj, {
  firstName: {
    value: 'Serhii',
  }
});
//console.log(obj);
//* В JS -- существует функциональное наследование и прототипное наследование!
//* Create User
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}
User.prototype.sayHello = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
}

const user = new User('Serhii', 'Melnychuk');

//*Customer
function Customer(firstName, lastName, membership) {
  User.call(this, firstName, lastName);
  this.membership = membership;
}
//* Прототипное наследование
Customer.prototype = Object.create(User.prototype);
//* Вернуть функцию конструктор у Customer
Customer.prototype.cunstructor = Customer;

Customer.prototype.getMemberShip = function () {
  return this.membership.toUpperCase();
};

const customer = new Customer('Oleg', 'Ivanov', 'start');
//console.log(customer);

//* Классы в ES6

const methodName = 'setMethod';
class ProductEs {
  constructor(barnd, price, discount){
    this._barnd = barnd;
    this.price = price;
    this.discount = discount;
  }
  get brand() {
    return this._barnd;
  }
  set brand(name) {
    this._barnd = name;
  }
  getPriceWithDis() {
    return (this.price * (100 - this.discount)) / 100;
  }
  setPrice(newP) {
    this.price = newP;
  }
  ['methodName'](newPrices) {
    this.price = newPrices;
  }
  //* Статический метод
  static plus(x,y) {
    return x + y;
  }
}
console.log(ProductEs.plus(2, 4));
//* Класс в ES6 также вызывается с оператором 'NEW',
//* Класы в Es6 дают возможность создавать статические методы!
//* Статические методы - методы которые могут вызываться отдельно от екзымпляра без его создания и не имеют доступа к this
const newProd = new ProductEs('Apple', 240, 15);

//* Наследование в ES6
class UserDev {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//* Пример Наследования
class CustomerDev extends UserDev {
  constructor(firstName, lastName, membership) {
    //* Для наследования надо вызвать метод 'super'
    super(firstName, lastName);
    this.membership = membership;
  }
  getFullName() {
    //* Вызвать метод родителя через метод существующего класа
    const parentRes = super.getFullName();
    return `${parentRes}, membership: ${this.membership}`;
  }
}
//* Инстанция класса!
const devCustom = new CustomerDev('Serhii', 'Melnichuk', 'basic');
console.log(devCustom);

console.log(devCustom.getFullName());
//* Инкапсуляция в JS -- 
// const User = {
//   name: 'Srgey',
//   getName() {
//     return this.name;
//   },
//   setName(name) {
//     this.name = name;
//   }
// };
//* Реализация преватности через Замыкания
// function User(name) {
//   let userName = name;
//   return {
//     getName() {
//       return userName;
//     },
//     setName(name) {
//       userName = name;
//     }
//   }
// }
// const sergey = new User('Sergey');
//* Закрытие методов и свойст спомощью Object.freeze() -- запрещает изменение методов и свойст обьектов! Несможем Переопределить!

function User(name) {
  let userName = name;
  return Object.freeze({
    getName() {
      return userName;
    },
    setName(name) {
      userName = name;
    }
  })
}
const sergey = new User('Sergey');