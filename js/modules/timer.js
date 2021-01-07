function timer(id, deadLine) {
  function getTimeRemaing(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      //find out how much time is left until the end of the "endtime"
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      seconds = Math.floor((t / 1000) % 60);
    //create variabl with every part off time
    return {
      total: t,
      days: days,
      minutes: minutes,
      hours: hours,
      second: seconds,
      // after this we can use this propertis in our function
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  // add for int num (1, 9) 0 first

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);
    // choise elem in html and put in to the variable
    // and create dynamic update our variable with the timeInterval in one sec
    updateClock();

    function updateClock() {
      const t = getTimeRemaing(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.second);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        //push into html code date
        //and if time = "endtime", or time < "endtime"
      }
    }
  }

  setClock(id, deadLine);
  //get timer work
}

export default timer;
