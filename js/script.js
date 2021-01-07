import tabs from "./modules/tabs";
import calc from "./modules/calc";
import cards from "./modules/cards";
import forms from "./modules/forms";
import modal from "./modules/modal";
import slider from "./modules/slider";
import timer from "./modules/timer";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    300000
  );

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", "2021-01-31");
  cards();
  calc();
  forms("form", modalTimerId);
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currenCounter: "#current",
    field: ".offer__slider-inner",
    wrapper: ".offer__slider-wrapper",
    slide: ".offer__slide",
  });
});
