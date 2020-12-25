"use strict";



window.addEventListener("DOMContentLoaded", () =>{
    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParrent = document.querySelector('.tabheader__items');
// connect elem from html with js
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
// connect to elements tabcocntent class  "hide" if he dont have it
//and remove  class tabheader__item_active from elements tabheader__item
        function showTabContent (i = 0) {
            tabsContent[i].classList.remove('hide');
            tabsContent[i].classList.add('show', 'fade');
        
            tabs[i].classList.add('tabheader__item_active');
        }
//add correct tabcontent item, and add class "fade(animation)", 
//and add class "tabheader__item_active" to correct tabheader__iteam
        hideTabsContent();
        showTabContent();
 //run function
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
// when click on the panel tabheader__item
// if event target is tabheader__item 
//forEach tabheader__item and run function 
//for elem event.tagret hideTabsConent - hide all content
//and show correct content with animations

// Timer    
const deadLine = '2020-12-31';
// time when timer be 0

function getTimeRemaing (endtime) {
    const t = Date.parse (endtime) - Date.parse (new Date()),
    //find out how much time is left until the end of the "endtime"
          days = Math.floor (t / (1000 * 60 * 60 * 24)),
          minutes = Math.floor ((t / (1000 * 60) % 60)),
          hours = Math.floor ((t / (1000 * 60 * 60)) % 24),
          seconds = Math.floor ((t / 1000) % 60);
          //create variabl with every part off time
        return {
            'total': t,
            'days': days,
            'minutes': minutes,
            'hours': hours,
            'second': seconds
            // after this we can use this propertis in our function
        };

}

function getZero (num) {
    if (num >= 0  && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
} 
// add for int num (1, 9) 0 first

function setClock (selector, endtime) {
    const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
// choise elem in html and put in to the variable
// and create dynamic update our variable with the timeInterval in one sec
     updateClock();

    function updateClock() {
        const t = getTimeRemaing(endtime);

        days.innerHTML = getZero (t.days);
        hours.innerHTML = getZero (t.hours);
        minutes.innerHTML = getZero (t.minutes);
        seconds.innerHTML = getZero (t.second);
        
        if (t.total <= 0) {
            clearInterval(timeInterval);
            //push into html code date 
            //and if time = "endtime", or time < "endtime"
        }
     }
}


setClock('.timer', deadLine);
//get timer work

    // slider
let slideIndex = 1;
const slides = document.querySelectorAll('.offer__slide'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current');

showSlides(slideIndex);

if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
} else {
    total.textContent = slides.length;
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');

    slides[slideIndex - 1].style.display = 'block'; 
    
    if (slides.length < 10) {
        current.textContent =  `0${slideIndex}`;
    } else {
        current.textContent =  slideIndex;
    }
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', function(){
    plusSlides(-1);
});

next.addEventListener('click', function(){
    plusSlides(1);
});


// Modal

const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 300000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);


class MenuCard {            // Create class 
    constructor (src, alt, title, descr, price, parentSelector, ...classes) {       //all argument what we needs
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.classes = classes;
        this.descr = descr;
        this.parent = document.querySelector(parentSelector)        //get parent element from DOM
        this.price = price;
        this.transfer = 27;
        this.changeToUAH();                                         //transver operation with this price
    }

    changeToUAH () {
       this.price = this.price * this.transfer;                     // change uah in $
    }

    render() {                                      // put in to the html
        const element = document.createElement('div');          // create new div

        if (this.classes.length === 0) {                    // check lenght rest array
            this.element = 'menu__item';                    //add defoult value of class
            element.classList.add(this.element);            //add in to the html
        } else {
            this.classes.forEach(className => element.classList.add(className));  //for every item add class in rest operator
        }
    
        element.innerHTML = `                                   
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                     <div class="menu__item-cost">Цена:</div>
                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
        `;              // write html code with class variable 
        this.parent.append(element);        // add to parent class element
    }
}
//Add class item

const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
};

axios.get('http://localhost:3000/menu') 
.then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });

//Form
 
const forms = document.querySelectorAll("form");
const message = {
    loading: 'img/spinner.svg',
    succes: 'Thx! we call you',
    fail: 'Man this is fail...'
};

forms.forEach(item => {
    bindPostData(item);
});
 
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
            headers: {
                'Content-type': 'application/json'
            },    
            body: data
    });

    return await res.json();
};

function bindPostData (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMessage);

        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));



        postData('http://localhost:3000/requests', json)
        .then(date => {
            console.log(date);
            showThingsModal(message.succes); 
            statusMessage.remove();
        })
        .catch(() => {
            showThingsModal(message.fail);
        })
        .finally(() => {
            form.reset();
        })

    });
}


    function showThingsModal(message) {
        const previusModalDialog = document.querySelector(".modal__dialog");

        previusModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
             thanksModal.remove();
             previusModalDialog.classList.add('show');
             previusModalDialog.classList.remove('hide');
             closeModal();
        }, 4000);
    }

   
});