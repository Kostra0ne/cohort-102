// requeire the librairies
const express = require("express");
const hbs = require("hbs");
// create the app
const app = express();
const port = 4000;

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// define the app's routing
app.get("/", (request, response) => {
  // first argument MUST be a string
  // second optionnal argument MUST be an object literal
  response.render("home", {
    title: "home",
    css: ["home", "gallery"],
    js: ["gallery"],
    cohort: {
      number: 102,
      students: 34,
      loveJS: true,
      favoriteBar: false,
    },
  });
});

app.get("/ironhackers", (request, response) => {
  const data = {
    title: "Ironhackers",
    css: ["hackers"],
    hacker: {
      name: "Myriam",
      instrument: "Guitare",
    },
    hackerNames: ["Vincent", "Nina", "Fanny", "Andy", "Gui", "Franck"],
  };
  response.render("ironhackers", data);
});

app.get("/html-tests", (req, res) => {
    const sendHTMLToTheView = {
        heading: "<h2>a dummy title</h2>",
        input: "<input type=\"color\">"
    };
    res.render("html-tests", sendHTMLToTheView);
});

app.get("*", (request, response) => {
  response.render("not-found");
});

// open a http port and listen
app.listen(port, () => {
  console.log("app is readt to rock @ http://localhost:" + port);
});
