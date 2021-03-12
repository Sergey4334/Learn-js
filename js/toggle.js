//* Навесить события 


//* Такой способ не рекомендуется использовать.
// btn.onclick = function () {
//   console.log('Hello');
// }
//* Второй способ для Использования
// btn.addEventListener('click', function (e) {
//   console.log(e);
// });
// function clickhandler(e) {
//   e.preventDefault();
//   console.log(this);
//   console.log('Клик по ссылке');
// }
// link.addEventListener('click', clickhandler);
//link.removeEventListener('click', clickhandler);
// const container = document.querySelector('.container');

// btn.addEventListener('click', e => {
//   const div = document.createElement('div');
//   const nextBtn = document.createElement('button');
//   div.textContent = 'Lorem ipsum';
//   nextBtn.textContent = 'Button';
//   div.appendChild(nextBtn);
//   container.appendChild(div);
// })
// container.addEventListener('click', e => {
//   console.dir(e.target);
//   if (e.target.tagName === 'BUTTON') {
//     console.log('click on button');
//   }
// })

//* Всплытие события в JS

// const btn = document.querySelector('.btn');
// const wrap = document.querySelector('.content');

// btn.addEventListener('click', e => {
//   e.stopPropagation();
//   console.log('click on btn');
// });

// wrap.addEventListener('click', e => {
//   console.log('click on wrap');
// });
//* Задание по событиям
//*1)
// const btnMsg = document.querySelector('#btn-msg');
// const atrdata = btnMsg.getAttribute('data-text');
// btnMsg.addEventListener('click', e => {
//   alert(atrdata);
// });
//*2)
// btnMsg.addEventListener('mouseover', e => {
//   btnMsg.classList.add('red');
  
//   console.log('mouse btn');
// });
// btnMsg.addEventListener('mouseout', e => {
//   btnMsg.classList.remove('red');
//   console.log('mouse out');
// });
//*3)
// const content = document.querySelector('.content');
// const tag = document.getElementById('tag');

// document.body.addEventListener('click', function(e) {
//   tag.textContent = `Tag on click: ${e.target.nodeName}`;
// });
//*4)
// const btngenerate = document.querySelector('#btn-generate');
// const blockUl = document.querySelector('ul');
// function addLi(e) {

//   const num = blockUl.children.length + 1;
//   const textItem = `Item ${num}`;
//   const li = document.createElement('li');
//   li.textContent = textItem;
//   blockUl.appendChild(li);
// }

// btngenerate.addEventListener('click', addLi);
//* Задание дропдовн меню.
// const dropItem = document.querySelectorAll('.dropdown-item');
// for (i = 0; i < dropItem.length; i++) {
//   dropItem[i].addEventListener("click", function () {
//     //this.classList.remove("d-none");
//     let item = document.querySelector('.dropdown-menu');
//     if (item.hasAttribute('class', 'd-none')){
//       item.classList.toggle('d-none');
//     }
//     console.log('Hello');
//   });
// }

//* Дроп довн меню 
// const dropItems = document.querySelectorAll('.dropdown-item');
// let openMenu = null;
// function toggleMenu(e) {
//   const menu = e.currentTarget.querySelector('.dropdown-menu');
//   const isAdded = menu.classList.toggle('d-none');
//   if (openMenu && openMenu !== menu) {
//     openMenu.classList.add('d-none');
//   }
//   if (!isAdded) {
//     openMenu = menu;
//   }
// }
// dropItems.forEach(d => d.addEventListener('click', toggleMenu));
//* Меняем фон дочерних елементов!!!

// const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
// const boxItems = document.querySelector('.box');
// const childBox = boxItems.children;

// console.dir(childBox);
// let pause = 200;

// function fnBox(e) {
//   let icolor;
//   for (let i = 0; i < colors.length; i++) {
//     icolor = colors[i];
//   }
//   console.log(icolor);

// }
// boxItems.addEventListener('mouseover', fnBox);


//*3 Утановка рандомного цвета фона на дочерних елементах
function setRandomColor(el) {
  const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  el.style.background = randomColor;
}
function resetColor(el) {
  el.style.background = '';
}
function onBoxHover(e) {
  let elements = [e.currentTarget];
  let currentEl = e.currentTarget;
  while (currentEl) {
    elements = [...elements, ...currentEl.children];
    currentEl = currentEl.children[currentEl.children.length - 1];
  }
  elements.forEach((el, index) => setTimeout(setRandomColor, 200 * (index + 1), el));
}
function onMouseLeave(e) {
  resetColor(e.currentTarget);
}
document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseenter', onBoxHover));
document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseleave', onMouseLeave));








    




