const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const movies = require("./data");
mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    Movie.create(movies)
      .then((createdMovies) => {
        console.log(createdMovies);
        mongoose.connection.close();
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
