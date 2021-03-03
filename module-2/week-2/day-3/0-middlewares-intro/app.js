const express = require("express");
const app = express();

console.log("hello middlewares !");

app.get("/", (req, res) => {
  res.send("<a href=\"https://expressjs.com/en/guide/using-middleware.html\" target=\"blank\">express official doc on middlewares</a>");
});

// middlewares are plain js functions
// the middleware concept is a cool express feature
// it's a way to add behaviours on different levels
// - app level
// - router level
// - route level

function myMiddleware(req, res, next) {
  req.foo = "bar"; // adding a key to the req object (we can use it later)
  console.log("hey i'm your first custom middleware function");
  next(); // passing the ball to the next middleware function
}

function myLogger(req, res, next) {
  console.log("------");
  console.log("request method : " + req.method + " - request path : " + req.path);
  console.log("------");
  next(); // passing the ball to the next middleware function
}

function myTimeChecker(req, res, next) {
  console.log("time now >>> " + Date.now() + "\n");
  next(); // passing the ball to the next middleware function
}

// more advanced : a closure function
function myFirstClosure(value) {
  return function (req, res, next) {
    console.log(value);
    next(); // passing the ball to the next middleware function
  };
}

// we can execute a middleware at app level
// (the function will be triggered on every incoming request, for any route)

app.use(myTimeChecker); // the app is using (executing) this middleware on each request

// router.use(myTimeChecker); // same would apply at router level

// we can also execute a middleware at route level
// (the function will be triggered on every incoming request on this specific route)

app.get("/a", myMiddleware, (req, res) => {
  res.send("hello, i'm response a");
});

// we can chain middlewares : each will pass the ball to the next() middleware function
app.get("/b", myMiddleware, myLogger, (req, res) => {
  console.log(req.foo);
  res.send("hola, i'm response b");
});

// closure functions allow to pass arguments to a middleware
app.get("/c", myFirstClosure("damn, js rocks !!!"), (req, res) => {
  res.send("hallo, i'm response c");
});

app.listen(3000);
