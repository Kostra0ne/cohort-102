// Iteration 1: All directors? - Get the array of all directors.
console.log("hello");

let testmovies = [{
        title: 'Schindler"s List',
        year: 1993,
        director: "Steven Spielberg",
        duration: "3h 15min",
        genre: ["Biography", "Drama", "History"],
        rate: 8.9,
    },
    {
        title: "Saving Private Ryan",
        year: 1998,
        director: "Steven Spielberg",
        duration: "2h 49min",
        genre: ["War"],
        rate: 8.6,
    },
];

let testmovies2 = [{
        title: "The Shawshank Redemption",
        year: 1994,
        director: "Frank Darabont",
        duration: "2h 22min",
        genre: ["Crime", "Drama"],
        rate: 9.3,
    },
    {
        title: "The Godfather",
        year: 1972,
        director: "Francis Ford Coppola",
        duration: "2h 55min",
        genre: ["Crime", "Drama"],
        rate: 9.2,
    },
    {
        title: "The Godfather: Part II",
        year: 1974,
        director: "Francis Ford Coppola",
        duration: "3h 22min",
        genre: ["Crime", "Drama"],
        rate: 9,
    },
    {
        title: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        duration: "2h 32min",
        genre: ["Action", "Crime", "Drama", "Thriller"],
        rate: 9,
    },
    {
        title: "12 Angry Men",
        year: 1957,
        director: "Sidney Lumet",
        duration: "1h 36min",
        genre: ["Crime", "Drama"],
        rate: 8.9,
    },
    {
        title: 'Schindler"s List',
        year: 1993,
        director: "Steven Spielberg",
        duration: "3h 15min",
        genre: ["Biography", "Drama", "History"],
        rate: 8.9,
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        director: "Quentin Tarantino",
        duration: "2h 34min",
        genre: ["Crime", "Drama"],
        rate: 8.9,
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        year: 2003,
        director: "Peter Jackson",
        duration: "3h 21min",
        genre: ["Adventure", "Drama", "Fantasy"],
        rate: 8.9,
    },
    {
        title: "Il buono, il brutto, il cattivo",
        year: 1966,
        director: "Sergio Leone",
        duration: "3h 2min",
        genre: ["Western"],
        rate: 8.9,
    },
    {
        title: "Fight Club",
        year: 1999,
        director: "David Fincher",
        duration: "2h 19min",
        genre: ["Drama"],
        rate: 8.8,
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        director: "Peter Jackson",
        duration: "2h 58min",
        genre: ["Adventure", "Drama", "Fantasy"],
        rate: 8.8,
    },
    {
        title: "Forrest Gump",
        year: 1994,
        director: "Robert Zemeckis",
        duration: "2h 22min",
        genre: ["Comedy", "Drama", "Romance"],
        rate: 8.8,
    },
    {
        title: "Star Wars: Episode V - The Empire Strikes Back",
        year: 1980,
        director: "Irvin Kershner",
        duration: "2h 4min",
        genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        rate: 8.8,
    },
    {
        title: "Inception",
        year: 2010,
        director: "Christopher Nolan",
        duration: "2h 28min",
        genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
        rate: 8.8,
    },
    {
        title: "The Lord of the Rings: The Two Towers",
        year: 2002,
        director: "Peter Jackson",
        duration: "2h 59min",
        genre: ["Adventure", "Drama", "Fantasy"],
        rate: 8.7,
    },
    {
        title: 'One Flew Over the Cuckoo"s Nest',
        year: 1975,
        director: "Milos Forman",
        duration: "2h 13min",
        genre: ["Drama"],
        rate: 8.7,
    },
    {
        title: "Goodfellas",
        year: 1990,
        director: "Martin Scorsese",
        duration: "2h 26min",
        genre: ["Crime", "Drama"],
        rate: 8.7,
    },
    {
        title: "The Matrix",
        year: 1999,
        director: "Lana Wachowski",
        duration: "2h 16min",
        genre: ["Action", "Sci-Fi"],
        rate: 8.7,
    },
    {
        title: "Shichinin no samurai",
        year: 1954,
        director: "Akira Kurosawa",
        duration: "3h 27min",
        genre: ["Adventure", "Drama"],
        rate: 8.7,
    },
    {
        title: "Star Wars",
        year: 1977,
        director: "George Lucas",
        duration: "2h 1min",
        genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        rate: 8.7,
    },
    {
        title: "Cidade de Deus",
        year: 2002,
        director: "Fernando Meirelles",
        duration: "2h 10min",
        genre: ["Crime", "Drama"],
        rate: 8.7,
    },
    {
        title: "Se7en",
        year: 1995,
        director: "David Fincher",
        duration: "2h 7min",
        genre: ["Crime", "Drama", "Mystery", "Thriller"],
        rate: 8.6,
    },
    {
        title: "The Silence of the Lambs",
        year: 1991,
        director: "Jonathan Demme",
        duration: "1h 58min",
        genre: ["Crime", "Drama", "Thriller"],
        rate: 8.6,
    },
    {
        title: 'It"s a Wonderful Life',
        year: 1946,
        director: "Frank Capra",
        duration: "2h 10min",
        genre: ["Drama", "Family", "Fantasy"],
        rate: 8.6,
    },
    {
        title: "La vita è bella",
        year: 1997,
        director: "Roberto Benigni",
        duration: "1h 56min",
        genre: ["Comedy", "Drama", "War"],
        rate: 8.6,
    },
    {
        title: "The Usual Suspects",
        year: 1995,
        director: "Bryan Singer",
        duration: "1h 46min",
        genre: ["Crime", "Drama", "Mystery", "Thriller"],
        rate: 8.6,
    },
    {
        title: "Léon",
        year: 1988,
        director: "Luc Besson",
        duration: "1h 50min",
        genre: ["Crime", "Drama", "Thriller"],
        rate: 8.6,
    },
    {
        title: "Saving Private Ryan",
        year: 1998,
        director: "Steven Spielberg",
        duration: "2h 49min",
        genre: ["Drama", "War"],
        rate: 8.6,
    },
    {
        title: "Sen to Chihiro no kamikakushi",
        year: 2001,
        director: "Hayao Miyazaki",
        duration: "2h 5min",
        genre: ["Animation", "Adventure", "Family", "Fantasy", "Mystery"],
        rate: 8.6,
    },
];

function getAllDirectors(array) {
    let result = [];

    array.forEach((something) => result.push(something.director));

    /*for (let i = 0; i < array.length; i++) {
          result.push(array[i].director);
      }*/

    //let dir1 = array[0].director;
    //let dir2 = array[1].director;

    //result.push(dir1, dir2);
    //result.push(dir2);
    let result2 = [...new Set(result)];
    console.log(result2);
    return [...new Set(result)];
}

//getAllDirectors(testmovies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    // step 1 , keep all the movies with SS

    /*result = toto.filter(function(movie) {
                                                                if (movie.director === "Steven Spielberg") {
                                                                    //it is equal to SS
                                                                    return true;
                                                                } else {
                                                                    //it is not equal to SS
                                                                    return false;
                                                                }
                                                            });*/

    // step 2, keep all the movies with drama genre
    return movies.filter(
        (movie) =>
        movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    ).length;

    /*for (let index = 0; index < toto.length; index++) {
                                                                                      if (toto[index].director === "Steven Spielberg") {
                                                                                          result.push(toto[index]);
                                                                                      }
                                                                                  }*/
}

howManyMovies(testmovies2);
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ar = [10, 20, 15, 1515, 1515, 151];

function getAverage(array) {
    let avr =
        array.reduce(function(acc, cur) {
            return acc + cur;
        }, 0) / array.length;
    return avr;
}

function ratesAverage(array) {
    let result = [];

    if (array.length === 0) {
        return 0;
    }

    for (let i = 0; i < array.length; i++) {
        result.push(array[i].rate);
    }

    result = getAverage(result);

    return Math.round(result * 100) / 100;
}
//console.log(getAllRates(testmovies2));

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average