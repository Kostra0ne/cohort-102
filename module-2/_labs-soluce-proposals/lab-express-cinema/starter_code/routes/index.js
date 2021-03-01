const express = require("express"); 
const router = express.Router(); // Create a app sub-module for routing.
const Movie = require("../models/Movie"); // Require the model in order to do some crud operations.

router.get("/", (req, res, next) => {
  res.render("index"); // display the index page.
});

router.get("/movies", (req, res, next) => {
  Movie.find({})  // find() without any parameter or an empty object, will retrieve all the documents from the collection. 
    .then((allMovies) => {
      res.render("movies.hbs", { movies: allMovies }); // We render the movies and pass the data, we have access to the array
                                                      // of movies with the "movies" key in our template.
    })
    .catch(next); //Pass the control to the error handling middleware
});

router.get("/movies/:id", (req, res, next) => {
  // We have access to the id sent through the url at req.params.id
  // If we put :toto, it would be req.params.toto
  Movie.findById(req.params.id) // findById will retrieve one document from the collection matching the id, id's are unique
                                // so you end up with your specific document :)
    .then((oneMovie) => {
      res.render("movie_detail.hbs", { movie: oneMovie });  // we pass the found movie to the view, we have access to that movie
                                                            // with the "movie" key.
    })
    .catch(next);
});

module.exports = router;
