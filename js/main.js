" use strict ";
let typesFilm = [];
  const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: typesFilm,
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('skolko filmov posmotrel', "");

    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('skolko filmov posmotrel', "");
    }
  },
  rememberMyFilms: function () {
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
},
writeYourGenres: function() {
  for (let i = 0; i < 3; i++) {
    let genre = prompt(`Vah lybimuy janr pid nomerom ${i + 1}`);
    if(genre === "" || genre == null) {
      console.log("vu veli ne korektnue danni")
      i--;
    }else {
      personalMovieDB.genres[i] = genre;
    }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`lubimuy janr ${i + 1} - eto ${item}`);
    })
    },
toggleVisibleMyDB: function() {
      if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
      }else {
        personalMovieDB.privat = true;
      }
},
detectPersonalLvl: function () { 
  if (personalMovieDB.count <= 10) {
    console.log('prosmotreno dovolno malo filmov');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Vu klasnuy zritel');
  } else if (personalMovieDB.count >= 30) {
    console.log('Vu kinoman!');
  } else {
    console.log('Error!!');
  }
    },
    showMyDB: function (hidden) {
       if (!hidden) {
         console.log(personalMovieDB);
       }
    }

};
