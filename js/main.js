"use strict";


const box = document.querySelector(".box");

console.log(box);

const btns = document.getElementsByTagName("button");

console.log(btns);

const circle = document.querySelectorAll(".circle");

console.log(circle);
circle.forEach(item => {
     item.style.display = "none";
});





















//const box = document.getElementById('box'),
//      btns = document.getElementsByTagName('button'),
//      circles = document.getElementsByClassName('circle'),
 //     wrappers = document.querySelector('.wrapper'),
 //     hearts = wrappers.querySelectorAll('.heart'),
 //     oneHeart = wrappers.querySelector('.heart');
    
 

     // box.style.backgroundColor = 'black';
     // box.style.width = '500px  ';

  //    box.style.cssText = `background-color: blue; width: 500px;`;


      //btns[1].style.borderRadius = '100%';
     /// circles[2].style.backgroundColor = 'red';


    // hearts.forEach(item => {
    //    item.style.backgroundColor = 'black';
    // });

//const div = document.createElement('div');
//const text = document.createTextNode('tyt byv ya');

//div.classList.add('black');

//wrappers.prepend(div);
//wrappers.appendChild(div);

//wrappers.insertBefore(div, hearts[2]);

//hearts[0].after(div);

//circles[0].remove();
//wrappers.removeChild(hearts[1]);

//hearts[1].replaceWith(btns[1]);
//wrappers.replaceChild(circles[0], hearts[0]);

//div.innerHTML = '<h1>Hello world</h1>';

//div.textContent = "Hello";

//div.insertAdjacentHTML('afterend', '<h2>Hello</h>');