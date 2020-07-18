"usestrict";
const numberOfFilms = +prompt("qancha kino kurgansiz?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {titank:5},
  actors: {},
  genres: [],
  privat: false,
};

const   a = prompt("oxirgi kurgan kino?", ""),
        b = +prompt("nechi bal berasiz", +"");
        c = prompt("oxirgi kurgan kino?", ""),
        d= +prompt("nechi bal berasiz", +"");

        personalMovieDB.movies[a]=b;
        personalMovieDB.movies[c]=d;

        console.log(personalMovieDB);