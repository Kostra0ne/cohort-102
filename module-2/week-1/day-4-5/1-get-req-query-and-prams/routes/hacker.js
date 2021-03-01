const express = require("express");
const router = express.Router();
const HackerModel = require("./../model/Hacker");

// each route is prefixed with /hackers

/* GET all hackers and display into a view listing. */
router.get("/", (req, res, next) => {
  // ask to the Hacker model for the data
  // every model function in mongoose are asynchronous
  HackerModel.find()
    .then((dbRes) => {
      res.render("all-hackers", {
        hackers: dbRes,
      });
    })
    .catch((dbError) => {
      next(dbError);
    });
});

// a route for a unique id ... not super D.R.Y
// router.get("/6037a1cf62fe09be72e54b21", (req, res, next) => {
//   res.send("ok so far ...");
// });

// the route eabove is working only for one _id

// ... but what if you have 8000+ hackers ?
// we don't want to create one route per hacker's id ;)
// so let's use query param to represent ANY _id

router.post("/create", async (req, res, next) => {
  // this is the request body > an object containing the posted informations"
  console.log(req.body);
  // remember : keys are set on the HTML form with the name attributes !!!
  const { name, email, favLangage, isRegistered } = req.body; // destructuring syntax here !!!!
  console.log(name, email, favLangage, isRegistered);
  /*
    const name = req.body.name;
    const email = req.body.email;
    const favLangage = req.body.favLangage;
    const isRegistered = req.body.isRegistered;
  */
  try {
    await HackerModel.create({
      name,
      email,
      favLangage,
      isRegistered: isRegistered === "on",
    });
    res.redirect("/hackers/add-another");
  } catch (err) {
    next(err);
  }
  // res.send("work in progress...");
});

// just below, i'm using a regex to be ultra cautious about what :id should look like !!!
// a mongo id is a random sequence of lower case letters and numbers, it's length is always
router.get("/:id([a-z0-9]{24})", (req, res, next) => {
  // console.log(req.params); // an object representing all dynamic path segments
  console.log(req.params.id); // :id is now a variable accessible through req.params.id

  HackerModel.findById(req.params.id)
    .then((hacker) => {
      console.log(hacker);
      res.render("one-hacker", { hacker });
    })
    .catch((dbError) => {
      next(dbError);
    });
});

router.get("/add-another", (req, res, next) => {
  res.render("create-hacker");
});

router.get("/edit/:id([a-z0-9]{24})", (req, res, next) => {
  HackerModel.findById(req.params.id)
    .then((hacker) => res.render("edit-hacker", { hacker }))
    .catch(next);
});

router.post("/edit/:id", async (req, res, next) => {
  const { name, email, favLangage, isRegistered } = req.body; // destructuring syntax here !!!!
  try {
    await HackerModel.findByIdAndUpdate(req.params.id, {
      name,
      email,
      favLangage,
      isRegistered: isRegistered === "on",
    });
    res.redirect("/hackers");
  } catch (err) {
    next(err);
  }
  // res.send("work in progress...");
});

router.get("/delete/:id", async (req, res, next) => {
  try {
    await HackerModel.findByIdAndDelete(req.params.id);
    res.redirect("/hackers");
  } catch (err) {
    next(err); // a way to pass the error to the next middleware
    // so far, it's a convenient way for you to handle/display errors directly in the page
  }
});

//another way to write the route just above

// router.get("/delete/:id", (req, res, next) => {
//   HackerModel.findByIdAndDelete(req.params.id)
//     .then(() => res.redirect("/hackers"))
//     .catch(next);
// });

router.get("/as-json", async (req, res, next) => {
  // let's use the async/await syntax
  try {
    const hackers = await HackerModel.find();
    res.json(hackers);
  } catch (dbError) {
    next(dbError); // will display the error in
  }
});

module.exports = router;
