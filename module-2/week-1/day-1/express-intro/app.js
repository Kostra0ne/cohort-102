// STEP 1 => import the frameworks/ LIBS
const express = require("express");
const hbs = require("hbs");

// generate the default application object
const app = express();

// console.log(__dirname)
// __dirname that returns the absolute path of the current working directory

// STEP 2 => BASIC APP SETUP
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views"); // where are my views ?
app.set("view engine", "hbs"); // what engine will generate the views ?

// STEP 3 = > DEFINE SOME ROUTES HERE

app.get(["/", "/home"], (request, response) => {
  response.render("home", {
    user: "Andy",
  });
});

app.get("/about", (request, response) => {
  const data = {
    companyFoundingYear: 2021,
  };
  response.render("about", data);
});

app.get("/users", (request, response) => {
  const users = [{ name: "foo" }, { name: "bar" }, { name: "baz" }];
  response.json(users);
});

app.get("*", (req, res) => {
  res.send("sorry not found");
});

// STEP 4 => kickstart the server

app.listen(3000, () => {
  console.log("server is ready to rock @ http://localhost:3000");
}); // this number represents an opened port on your server
// the outside world is allowed to access your app ONLY through opened ports
