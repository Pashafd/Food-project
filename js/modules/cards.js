import { getResource } from "../services/services";

function cards() {
  class MenuCard {
    // Create class
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      //all argument what we needs
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.classes = classes;
      this.descr = descr;
      this.parent = document.querySelector(parentSelector); //get parent element from DOM
      this.price = price;
      this.transfer = 27;
      this.changeToUAH(); //transver operation with this price
    }

    changeToUAH() {
      this.price = this.price * this.transfer; // change uah in $
    }

    render() {
      // put in to the html
      const element = document.createElement("div"); // create new div

      if (this.classes.length === 0) {
        // check lenght rest array
        this.element = "menu__item"; //add defoult value of class
        element.classList.add(this.element); //add in to the html
      } else {
        this.classes.forEach((className) => element.classList.add(className)); //for every item add class in rest operator
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
            `; // write html code with class variable
      this.parent.append(element); // add to parent class element
    }
  }
  //Add class item

  getResource("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });
}

export default cards;
