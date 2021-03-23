require("dotenv").config();
require("./config/dbConnection");

const express = require("express");
const path = require("path");
const logger = require("morgan");
const session = require("express-session");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(express.json()); // Allows you to access req.body from a application/json request
app.use(express.urlencoded({ extended: false })); // Allows you to access req.body from a application/x-www-form-urlencoded request
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Accept cookies from origins (needed for session)
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 1day
    },
    resave: true,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  console.log(req.session);
  next();
});

app.use("/api/auth", require("./routes/auth"));

module.exports = app;
