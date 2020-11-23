" use strict ";

let numberOfFilms,
    typesFilm = [];
 
// функція старт питає. та не дає юзеру не дати відповіть на питання
function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

            while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
              numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}


 start();

  const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: typesFilm,
  privat: false
};

// функція записує який фільм та його оцінку в константу .movies
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
  const a = prompt("kakoy film"),
  b = prompt('ocenochka');

if (a != null && b != null && a != '' && b != '' && a.length < 50) {
  personalMovieDB.movies[a] = b;

} else {
  console.log('error');
  i--;
    }
   }
}



// питає юзера про жанри кіно, іттерація 3 рази
function writeYourGenres () {
  for (let i = 0; i < 3; i++) {
  typesFilm[i] = prompt(`Vah lybimuy janr pid nomerom ${i + 1} `);
  }
return (typesFilm);
}





// фунція дає оцінку який же ти переглядач фільмів)
function detectPersonalLvl() { 
if (personalMovieDB.count <= 10) {
  console.log('prosmotreno dovolno malo filmov');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log('Vu klasnuy zritel');
} else if (personalMovieDB.count >= 30) {
  console.log('Vu kinoman!');
} else {
  console.log('Error!!');
}
  }



// функція яка запускає весь код якщо .privat - не правда
function showMyDB() {
  if (personalMovieDB.privat == false) {
    detectPersonalLvl(),
    writeYourGenres(),
    rememberMyFilms();
  }
}
showMyDB();
console.log(personalMovieDB);
