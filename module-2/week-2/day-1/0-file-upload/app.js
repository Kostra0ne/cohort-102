require("dotenv").config();
require("./config/mongodb");

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const hbs = require("hbs");

const indexRouter = require("./routes/index");
const hackerRouter = require("./routes/hacker");
const cohortRouter = require("./routes/cohort");

const app = express();

app.locals.welcomeMessage = "welcome to our cool application !!!";

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json()); // setup to access posted information via AJAX ...
app.use(express.urlencoded({ extended: false })); 
// setup to access posted information via the clasic form method ...
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

hbs.registerPartials(__dirname + "/views/partials");

app.use("/", indexRouter);
app.use("/hackers", hackerRouter);
app.use("/cohorts", cohortRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
