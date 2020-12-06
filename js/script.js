"use strict";

window.addEventListener("DOMContentLoaded", () =>{
    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParrent = document.querySelector('.tabheader__items');

        function hideTabsContent () {
            tabsContent.forEach(item => {
                if (!item.classList.contains('hide')) {
                   item.classList.add('hide'); 
                } 
            });
              tabs.forEach(item => {
                  item.classList.remove("tabheader__item_active");
                });                 
        }

        function showTabContent (i = 0) {
            tabsContent[i].classList.remove('hide');
            tabsContent[i].classList.add('show', 'fade');
        
            tabs[i].classList.add('tabheader__item_active');
        }

        hideTabsContent();
        showTabContent();
 
tabsParrent.addEventListener('click', (event) => {
       let target = event.target;
            if (target && target.classList.contains('tabheader__item')) {
                tabs.forEach((item, i) => {
                        if (target == item) {
                            hideTabsContent();
                            showTabContent(i);
                        }
                });
            }
       });
// Timer    

const deadLine = '2020-12-31';

function getTimeRemaing (endtime) {
    const t = Date.parse (endtime) - Date.parse (new Date()),
          days = Math.floor (t / (1000 * 60 * 60 * 24)),
          minutes = Math.floor ((t / (1000 * 60) % 60)),
          hours = Math.floor ((t / (1000 * 60 * 60)) % 24),
          seconds = Math.floor ((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'minutes': minutes,
            'hours': hours,
            'second': seconds
        };

}

function getZero (num) {
    if (num >= 0  && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
} 

function setClock (selector, endtime) {
    const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

     updateClock();

    function updateClock() {
        const t = getTimeRemaing(endtime);

        days.innerHTML = getZero (t.days);
        hours.innerHTML = getZero (t.hours);
        minutes.innerHTML = getZero (t.minutes);
        seconds.innerHTML = getZero (t.second);
        
        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
     }
}


setClock('.timer', deadLine);

// slider
const currentCounter = document.querySelector('#current');
const totalCounter = document.querySelector('#total');
const slider = document.querySelectorAll('.offer__slide');
const next = document.querySelector('.offer__slider-next');
const prev = document.querySelector('.offer__slider-prev');
let i = 0;


function changeNum (i = 1) {

    if (i >= 1 && i <= 3) {
    currentCounter.innerText = `0${i}`;
    totalCounter.innerText = `0${i + 1}`;
    } else if (i == 4) {
        currentCounter.innerText = `0${i}`;
        totalCounter.innerText = `0${1}`;
    } 
}

function hideSlides () {
    slider.forEach(item => {
        item.classList.add('hide');
    });
}

function showSlides (i = 0) {
    slider[i].classList.remove('hide');
    slider[i].classList.add('show', 'fade');
   changeNum(i + 1);
}

 hideSlides();
 showSlides();
changeNum();

next.addEventListener('click', () => { 
    if (i >= 0 && i < 3) {
     i++;
    hideSlides();
    showSlides(i);   
    } 
 });

prev.addEventListener('click', () => { 
    if (i > 0) {
         i--;
    hideSlides();
    showSlides(i);
    }
});


// Modal

const btnModal = document.querySelectorAll('#modal');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal__close');



function showModalWindow () {
    modal.classList.remove('hide');
    modal.classList.add('show', 'fade');

    document.body.style.overflow = 'hidden';
}

function hideModalWindow () {
    modal.classList.remove('show');
    modal.classList.add('hide');

    document.body.style.overflow = '';
}

hideModalWindow();

    btnModal.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            if (event.target == item) {
                showModalWindow();       
                console.log(modal.classList); 
                        if (modal.classList.contains('show')) {
                                modalClose.addEventListener('click', () => { hideModalWindow(); });  
                        }           
            }   

        });

    });


            document.addEventListener('click', (event) => {
                    if (event.target == modal) {
                        hideModalWindow();
                        }
                });         
            





});