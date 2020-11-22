'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 
for (let i = 0; i < 2; i++) {
     const a = prompt("skoko filmov"),
     b = prompt('ocenochka');

 if (a != null && b != null && a != '' && b != '' && a.length < 50) {
     personalMovieDB.movies[a] = b;

 } else {
     console.log('error');
     i--;
 }
}

console.log(personalMovieDB);

if (personalMovieDB.count <= 10) {
    console.log('prosmotreno dovolno malo filmov');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Vu klasnuy zritel');
} else if (personalMovieDB.count >= 30) {
    console.log('Vu kinoman!');
} else {
    console.log('Error!!');
}
