// require dependncies
const express = require("express");
const hbs = require("hbs");
// initialize app object
const app = express();

// do app config
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// setup app routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("*", (req, res) => {
  res.send("sorry not found");
});

// kickstart the http server
app.listen(8888, () => {
  console.log("ready @ http://localhost:8888");
});
