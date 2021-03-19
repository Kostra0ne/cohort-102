const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const Guitar = require("./models/Guitar");
const mongoose = require("mongoose");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

mongoose
  .connect("mongodb://localhost/my-sexy-guitar")
  .then((res) => {
    console.log("yay connected to db");
  })
  .catch((error) => {
    console.log("failed to connect to db");
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/guitars", (req, res, next) => {
  console.log("from react");

  Guitar.find()
    .then((guitarDocuments) => {
      res.json(guitarDocuments);
    })
    .catch((error) => {
      console.log(error);
    });

  // res.json({ message: "Hello my friend" });
});

app.get("/guitars/:id", (req, res, next) => {
  Guitar.findById(req.params.id)
    .then((guitarDocument) => {
      res.status(200).json(guitarDocument);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post("/guitars", (req, res, next) => {
  Guitar.create(req.body)
    .then((createdDocument) => {
      res.json(createdDocument);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = app;
