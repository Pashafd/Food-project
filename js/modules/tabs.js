function tabs(
  tabsSelector,
  tabsContentSelector,
  tabsParrentSelector,
  activeClass
) {
  let tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParrent = document.querySelector(tabsParrentSelector);
  // connect elem from html with js

  function hideTabsContent() {
    tabsContent.forEach((item) => {
      if (!item.classList.contains("hide")) {
        item.classList.add("hide");
      }
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
  // connect to elements tabcocntent class  "hide" if he dont have it
  //and remove  class tabheader__item_active from elements tabheader__item
  function showTabContent(i = 0) {
    tabsContent[i].classList.remove("hide");
    tabsContent[i].classList.add("show", "fade");

    tabs[i].classList.add(activeClass);
  }
  //add correct tabcontent item, and add class "fade(animation)",
  //and add class "tabheader__item_active" to correct tabheader__iteam
  hideTabsContent();
  showTabContent();
  //run function
  tabsParrent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
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
}

export default tabs;
