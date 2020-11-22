" use strict ";

let numberOfFilms = +prompt("skolko filmov yje posmotreli");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


let questionOne = prompt("Odin iz poslednih posmotrenuh filmov?");
let questionTwo = +prompt("Na skolko ocenite ego");
let questionThre = prompt("Odin iz poslednih posmotrenuh filmov?");
let questionFour = +prompt("Na skolko ocenite ego");

personalMovieDB.movies[questionOne] = questionTwo;
personalMovieDB.movies[questionThre] = questionFour;

console.log(personalMovieDB);
   







