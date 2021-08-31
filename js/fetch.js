//* Примитив промис- обьект который помагает нам работать с асинхронным кодом, и делает наш код немного синхронным
const promise = new Promise((resolve, reject) => {
  //* Приминмает колбек где 2 параметра В resolve and reject принимают только один аргумент, если несколько надо формировать обьект и передавать
  setTimeout(() => reject('error!'),3000);
});
//console.log(promise);
promise.then(r => {console.log(r); return r}) //* примит то, что было передано в resolve каждый (then это также promise)
.then(y => console.log(y))
.catch(err => console.log(err)); //* Отлавливать ошибки в методе catch

//* Fetch - новый стандарт для Ajax запросов который используют Promise

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//* Вызвав эту функцию получаем на выходе Promise/
//* Fetch по умолчанию делает Get Запрос если другой запром, то вторым параметром передать доп агрументы в виде Обьекта

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    return response.json() //* Получаем данные от сервера вызвам метод json() если данные в этом формате
  })
  .then(posts => console.log(posts)) //* Получаем наши посты
  .catch(err => console.log(err));

//* Использование fetch через функции

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(post => resolve(post))
      .catch(err => reject(err));
  })
}
//getPost(1).then(post => console.log(post));
function getPost2(id) {
  const [userType, userId] = id.split('-');
  return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    .then(response => response.json())
}
// getPost2('user-1')
//   .then(post => console.log(post))
//   .catch(err => console.log(err));
//* Использование resolve из Promise Для отслеживания ошибок!

function getPost3(id) {
  return Promise.resolve().then(() => {
    const [userType, userId] = id.split('-');
    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then(response => response.json())
  }); 
}
getPost3('user-1')//* Если передадим число либо что то другое
  .then(post => console.log(post))
  .catch(err => console.log(err));

//* Async Await - новый формат написания асинхронного кода! Также позволяет писать код в более синхронном стиле

//* async - ставиться перед определением функции или метода -- всегда будет возвращать Promise

//* await - типа замораживает наш код до выполнения асинхронных действий

async function getP(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return data;
  }
  catch(err) {
    console.log(err);
    return Promise.resolve(err);
  }
}
getP(1)
  .then(data => console.log(data))
  .catch(err => console.log(err));


async function getAll() {
  const [res1, res2] = await Promise.all([getP(1), getP(2)]);
  //console.log(res1, res2);
}
getAll();

