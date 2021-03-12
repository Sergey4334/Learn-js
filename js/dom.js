const bodyVar = document.body;
const div = document.querySelector('div');

// div.classList.add('content-div','custom');
// div.classList.remove('content-div');
// div.classList.contains('custom'); // *найти класс у елемента true / false
// div.classList.toggle('toggle'); // *удалять либо добавляет указанный кдасс.
// div.setAttribute('id', 'div-id'); // *Добавит в див атрибут ID!!!
// div.getAttribute('div-id');
//console.log(div);
//div.hasAttribute('div-id'); 
// div.removeAttribute('id');

//console.log(div.dataset.myatr = 'MyData');

// *МАНИПУЛЯЦИЯ С DOM!!!
//const title = document.querySelector('h1');
//title.innerHTML = '<span>Text</span>';
//title.textContent = 'Новый текст в h1';
//title.insertAdjacentHTML('beforebegin', '<h2>text h2</h2>');
//console.log(title);

// *Создание елемента 
// const span = document.createElement('span');
// span.textContent = 'Text create with createElement!!!';
// span.classList.add('Create-class');
//console.log(title.appendChild(span));
//* Создаем фрагмент
// const fragment = document.createDocumentFragment();
// const colors = ['black', 'red', 'orange'];
// colors.forEach((color) => {
//   const item = document.createElement('div');
//   item.classList.add(`bg-${color}`);
//   item.textContent = color;
//   item.style.background = color;
//   fragment.appendChild(item);
// });
// //* Создаем фрагмент

// //* Добавляем наш фрагмент в body 
// document.body.appendChild(fragment);

//* Удаление созданых елементов со страницы
//title.remove(); //* Не кроссбраузерно
//title.parentElement.removeChild(title); //*Кроссбраузерный вариант
//* Задание к DOM

//*1)

const prg = document.querySelector('p');
console.log(prg.textContent);

//*2)

// function fndom(dom) {
//   if (!(dom instanceof Element)) return console.log('Dom has not element');
//   const nType = dom.nodeType;
//   const nName = dom.nodeName;
//   const countChil = dom.childNodes.length;

//   return {
//     nType,
//     nName,
//     countChil,
//   };
// }
// const resT = fndom(document.body);
// console.log(resT);

// //*3)
// const list = document.querySelector('ul');

// function getTextFromUl(ul) {
  
//   const [...textLink] = ul.querySelectorAll('a') || [];
//   return textLink.map(a => a.textContent);

// };

// console.log(getTextFromUl(list));

// //*4)
// const [...childN] = document.querySelector('p').childNodes;

// childN.forEach(child => {
//       if (child.nodeType === 3) {
//         child.textContent = '-text-'
//       }
//     });
    //console.log(pChildNodes);


//*1 
const listUl = document.querySelector('ul');
listUl.classList.add('list');
console.log(listUl);
//*2
// const link = listUl.querySelectorAll('a');
// link.classList.add('link');
// console.log(link);
const link = document.querySelector('ul ~ a');
    link.id = 'link';
    console.log(link);

//*3

const [...liN2] = document.querySelectorAll('li:nth-child(odd)');
liN2.forEach(li => li.classList.add('item'));

// const [...liItem];

// liItem.forEach(child => {
//       if (Boolean(child % 2)) {

//         child.classList.add('item');
//       }
//     });
//     console.log(liItem);
//*4
//*На все ссыдки в документе установить класс 'custom-link';

// const [...links] = document.links;
// links.forEach(link => link.classList.add('custom-link'));

//* Задания по добавлению в html

//*1) 
const fragment = document.createDocumentFragment();

// const items = ['item', 'item'];
// //console.log(items);
// items.forEach((i) => {
  
//   const item = document.createElement('li');
//   item.classList.add('new-item');
//   item.textContent = `${i} ${it.length}`;
//   fragment.appendChild(item);
//   it.appendChild(fragment);
// }); 


//1
const blockUl = document.querySelector('ul');
    const currentCounts = blockUl.children.length;
    const newLiCounts = 2;

    for (let i = 0; i < newLiCounts; i++) {
      let li = document.createElement('li');
      li.classList.add('new-item');
      li.textContent = `item ${currentCounts + i }`;
      blockUl.appendChild(li);
    }

//*2

const [...links] = document.querySelectorAll('ul a');
links.forEach(link => link.insertAdjacentHTML('beforeend', '<strong>Strong</strong>'));

//*3
let pic = document.createElement("IMG");
pic.src = "animals.jpg";
pic.alt = "Animals image for document";
document.body.prepend(pic);
//*4
const mark = document.querySelector('mark');
mark.append(' green');
mark.setAttribute('class', 'green');
//*5

const contentUl = document.querySelector('ul');
const listCont = [...contentUl.children].sort((itemprev, itemnext) => {
  return itemprev.textContent > itemnext.textContent ? -1 : 1;
});
contentUl.innerHTML = '';
listCont.forEach((item) => contentUl.appendChild(item));
console.log(listCont);

//.sort((price1, price2) => price1.price - price2.price);

// const list23 = document.querySelector('ul');
//     const listItems = [...list23.children].sort((prev, next) => {
//       return prev.textContent > next.textContent ? -1 : 1;
//     });
//     // Очищаем текущее содержимое списка
//     list23.innerHTML = '';
//     // Генерируем новое содержимое из отсортированного массива элементов
//     listItems.forEach((item) => list23.appendChild(item));








































// (function isPar(parent, child) {
//   parent = isPar(document.body.children[0], document.querySelector('mark'));
//   return parent;
// })();
// console.log(parent);
//2)

// function isParent(parent, child) {
//   if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement)) return console.log('Arguments is not HTMLElement ');
//   let isParent = false;
//       let currentParent = child.parentElement;
//       while(currentParent) {
//         isParent = currentParent === parent
//         if (isParent) {
//           break;
//         }
//         currentParent = currentParent.parentElement;
//       }

//   return isParent;
// }
// console.log(isParent(document.body.children[0], document.querySelector('mark')));

// const filterLinks = Array.from(document.links).filter(a => !a.closest('ul'));
// console.log(filterLinks);

// //4)
// const ul = document.querySelector('ul');
// const prev = ul.previousElementSibling;
// const next = ul.nextElementSibling;

// isParent();
// console.log(parent);

