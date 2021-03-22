require("dotenv").config(); // At the top of your app.js
require("./config/dbConnection");
const cors = require("cors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Allows a domain, here : http://localhost:3000 to communicate with the API
    // origin: ["http://localhost:3000", "www.facebook.com", "www.amazon.fr"], // Allows a list of domains to communicate with the API
    // origin: "*", // Allow all origins to talk to this api
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", require("./routes/toto"));

app.use("/api/users", usersRouter);

module.exports = app;
