const express = require("express");
const router = express.Router();
const HackerModel = require("./../model/Hacker");

/* GET all hackers and display into a view listing. */
router.get("/", (req, res, next) => {
  // ask to the Hacker model for the data
  // every model function in mongoose are asynchronous
  HackerModel.find()
    .then((hackersFromDb) => {
      res.render("all-hackers", {
        list: hackersFromDb,
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

// ... but what if you have 10 thousand hackers ?
// you don't want to create one route per hacker's id

// let's use query param to represent ANY _id
router.get("/:id", (req, res, next) => {
  // console.log(req.params); // an object representing all dynamic path segments
  console.log(req.params.id); // :id is now a variable accessible through req.params.id
  
  HackerModel.findById(req.params.id)
    .then((hackerFromDb) => {
      res.render("one-hacker", {
        hacker: hackerFromDb,
      });
    })
    .catch((dbError) => {
      next(dbError);
    });
});

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
