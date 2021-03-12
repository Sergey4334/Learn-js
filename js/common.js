// //* Ajax

// const btn = document.querySelector('button');
// const container = document.querySelector('.container');

// function getPosts(cb) {
//     const xhr = new XMLHttpRequest();
//   //* Подписка на загрузку
//   xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//   xhr.addEventListener('load', () => {
//     const response = JSON.parse(xhr.responseText);
//     //console.log(response);
//     cb(response);
//   });
//   //* Подписка на вывод ошибок
//   xhr.addEventListener('error', () => {
//     console.log('new error');
//   });
//   xhr.send();
// }


// // btn.addEventListener('click', e => {
// //   getPosts(renderPosts);
// // });

// //* Get User name
// const containerUsers = document.querySelector('.container-users');

// function getUsers(cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
//   xhr.addEventListener('load', () => {
//     const respUsr = JSON.parse(xhr.responseText);
//     //console.log(respUsr);
//     cb(respUsr);
//   });

//   xhr.addEventListener('error', () => {
//     console.log('new error');
//   });
//   xhr.send();
// }

// function renderUsers(respUsr) {
//   const fragment = document.createDocumentFragment();
//   respUsr.forEach(user => {
//       const userCard = document.createElement('div');
//       userCard.classList.add('card');
//       const userName = document.createElement('div');
//       userName.classList.add('card-body', 'col-md-8',);
//       const userInfo = document.createElement('div');
//       userInfo.innerHTML = "";
    
//     const buttonName = `<button type="button" class="list-group-item list-group-item-action" data-user-id="${user.id}">
//       ${user.name}
//     </button>`;
//     userName.innerHTML = buttonName;

//     userInfo.classList.add('card', 'user-info','col-md-8',);
//     userInfo.innerHTML = `
//     <p><b>Email:</b> ${user.email}</p>
//     <p><b>Username:</b> ${user.username}</p>
//     <p><b>Webcite:</b> ${user.website}</p>
//     <p><b>Company:</b> ${user.company.name}</p>
//     <p><b>Address:</b> ${user.address.city}</p>
//     <p><b>Phone:</b> ${user.phone}</p>
//     `;
    
//     userName.addEventListener('click', e => {
//       userName.appendChild(userInfo);
//     });
  
//     userCard.appendChild(userName);
//     fragment.appendChild(userCard);
//   });
  
//   //containerUsers.appendChild(fragment);
// };

// getUsers(renderUsers);

// //* Post Запросы в Javascript
// const btnGetPosts = document.querySelector('.btn-get-posts');
// const btnAddPost = document.querySelector('.btn-add-post');
// const contentPost = document.querySelector('.content-post');

// function createPosts(body, cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
//   xhr.setRequestHeader('Content-type','application/json; charset=UTF-8');
//   xhr.addEventListener('load', () => {
//     const response = JSON.parse(xhr.responseText);
//     cb(response);
//   });

//   function renderPosts(response) {
//     const fragment = document.createDocumentFragment();
//       response.forEach(post => {
//         const card = cardTemplate(post);
//         fragment.appendChild(card);
//       });
//       contentPost.appendChild(fragment);
//   }

//   xhr.addEventListener('error', () => {
//     console.log('new error');
//   });
//   xhr.send(JSON.stringify(body));
// }

// btnAddPost.addEventListener('click', (e) => {
//   const newPost = {
//     title: 'New post',
//     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nisi earum quidem laborum cum molestiae mollitia odio eligendi beatae distinctio nihil labore repellendus suscipit maxime, recusandae illum architecto ad? Sed.',
//     userId: 1,
//   };

//   createPosts(newPost, (response) => {
//     const card = cardTemplate(response);
//     console.log(card);
//     contentPost.insertAdjacentElement("afterbegin", card);
//   });
  
// });

// function cardTemplate(post) {
//   const card = document.createElement('div');
//   card.classList.add('card');
//   const cardBody = document.createElement('div');
//   cardBody.classList.add('card-body');
//   const tittlePost = document.createElement('h5');
//   tittlePost.classList.add('card-title');
//   tittlePost.textContent = post.title;
//   const textPost = document.createElement('p');
//   textPost.classList.add('card-text');
//   textPost.textContent = post.body;
//   cardBody.appendChild(tittlePost);
//   cardBody.appendChild(textPost);
//   card.appendChild(cardBody);
  
//   return card;
// }




// //* Form add Users

// //* Elements 
// const form = document.forms['formUsers'];
// const inputName = form.elements['name'];
// const inputEmail = form.elements['email'];
// const inputPhone = form.elements['phone'];
// const inputWebsite = form.elements['website'];

// //*Events

// form.addEventListener('submit', onFormSubmit);

// function createPosts(body, cb) {

//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', 'https://jsonplaceholder.typicode.com/users');
//   xhr.setRequestHeader('Content-type','application/json; charset=UTF-8');
//   xhr.addEventListener('load', () => {
//     const response = JSON.parse(xhr.responseText);
//     cb(response);
//   });

//   function renderPosts(response) {
//     const fragment = document.createDocumentFragment();
//       response.forEach(post => {
//         const card = cardTemplate(post);
//         fragment.appendChild(card);
//       });
//       contentPost.appendChild(fragment);
//   }

//   xhr.addEventListener('error', () => {
//     console.log('new error');
//   });
//   xhr.send(JSON.stringify(body));
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   const inName = inputName.value;
//   const inEmail = inputEmail.value;
//   const inPhone = inputPhone.value;
//   const inWebsite = inputWebsite.value;
//   if (!inPhone || !inWebsite) {
//     alert('Введите Телефон либо Вебсайт');
//     return;
//   }
//   if (!inName || !inEmail) {
//     alert('Введите Name и Email');
//     return;
//   }
  
//   const listItem = userListItemTemplate(user);
//   listContainer.insertAdjacentHtml('afterbegin', listItem);
//   form.reset();
// }

// function userListItemTemplate(user) {
//   return `
//     <div class="list-group-item list-group-item-action">
//       <div class="d-flex w-100 justify-content-between">
//         <h5 class="mb-1">${user.inName || ""}</h5>
//         <small>${user.inPhone || ""}</small>
//       </div>
//       <p class="mb-1">${user.inEmail || ""}</p>
//       <small>${user.inWebsite | ""}</small>
//     </div>
//   `;
// }

// //* CORS -- Cors Origin Resorse Shering -- 
// function getGmail(cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://gmail.com');
//   xhr.addEventListener('load', () => {
//     const respUsr = JSON.parse(xhr.responseText);
//     console.log(respUsr);
//     cb(respUsr);
//   });

//   xhr.addEventListener('error', () => {
//     console.log('new error');
//   });
//   xhr.send();
// }

// //* Обработка ошибок.
// function myHttpRequest({ method, url } = {}, cb) {
//   try {
//     //const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.addEventListener('load', () => {
//     if (Math.floor(xhr.status / 100) !== 2) {
//       cb(`Error. Status code: ${xhr.status}`, xhr);
//       return;
//     };
//     const respUsr = JSON.parse(xhr.responseText);
//     cb(null, respUsr);
//     });
//     xhr.addEventListener('error', () => {
//       cb(`Error. Status code: ${xhr.status}`, xhr);
//     });
//     xhr.send();

//   } catch (error) {
//     cb(error);
//   }

// }
// // myHttpRequest({ method: 'GET', url: 'https://jsonplaceholder.typicode.com/posts' }, (err, res) => {
// //   if (err) {
// //     console.log(err);
// //     return;
// //   }
// //   console.log(res);
// // });
// function http()  {
//   return {
//     get(url, cb) {
//       try {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.addEventListener('load', () => {
//         if (Math.floor(xhr.status / 100) !== 2) {
//           cb(`Error. Status code: ${xhr.status}`, xhr);
//           return;
//         };
//         const respUsr = JSON.parse(xhr.responseText);
//         cb(null, respUsr);
//         });
//         xhr.addEventListener('error', () => {
//           cb(`Error. Status code: ${xhr.status}`, xhr);
//         });
//         xhr.send();
    
//       } catch (error) {
//         cb(error);
//       }
//     },
//     post(url, body, headers, cb) {
//       try {
//         const xhr = new XMLHttpRequest();
//         xhr.open('POST', url);
//         xhr.addEventListener('load', () => {
//         if (Math.floor(xhr.status / 100) !== 2) {
//           cb(`Error. Status code: ${xhr.status}`, xhr);
//           return;
//         };
//         const respUsr = JSON.parse(xhr.responseText);
//         cb(null, respUsr);
//         });
//         xhr.addEventListener('error', () => {
//           cb(`Error. Status code: ${xhr.status}`, xhr);
//         });
//         if (headers) {
//           Object.entries(headers).forEach(([key, value]) => {
//             xhr.setRequestHeader(key, value);
//           })
//         }
//         xhr.send(JSON.stringify(body));
    
//       } catch (error) {
//         cb(error);
//       }
//     }
//   }
// };
// const myHttp = http();
// myHttp.post('https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'far', userId: 1, }, {
//   'Content-Type': 'aplication/json',
//   'x--aux': 'dsddsdssds'
// }, (err, res) => {console.log(err, res)});

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() { console.log(i); }, i * 1000 );
// }
//* Promises - как черный ящик в котором выполняется каккая-то асинхронная операция!
// const promise = new Promise((resove, reject) => {
//   setTimeout(() => resove(Math.random()), 1000);
// });
// //* Для выполнение promise нужно вызвать метод then/ один из методов Promise
// console.log(promise);
// promise.then(x => { console.log(x); return x; }).then(y => console.log(y));

//* Колбек хел. через Promise.
// function getPost(id) {
//   return new Promise((resove, reject) => {
    
//   });
// }
// function getPostComent() {
  
// }
// function getUserCreaded() {
  
// }
//* Fetch - новый стандарт для Ajax запросов который используют Promise
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//* Вызвав эту функцию получаем на выходе Promise/
//* Fetch по умолчанию делает Get Запрос

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    return response.json()
  })
  .then(posts => console.log(posts))
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
// getPost3('user-1')//* Если передадим число либо что то другое
//   .then(post => console.log(post))
//   .catch(err => console.log(err));

//* Async Await - новый формат написания асинхронного кода! Также позволяет писать код в более синхронном стиле
// function getPost4(id) {
//   return Promise.resolve().then(() => {
//     const [userType, userId] = id.split('-');
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
//       .then(response => response.json())
//   }); 
// }
//* async - ставиться перед определением функции или метода -- всегда будет возвращать Promise
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
// getP(1)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


async function getAll() {
  const [res1, res2] = await Promise.all([getP(1), getP(2)]);
  console.log(res1, res2);
}
getAll();



















