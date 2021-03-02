const express = require("express");
const router = express.Router();
const CohortModel = require("./../model/Cohort");
const campuses = CohortModel.schema.path('campusLocation').enumValues;

console.log(campuses);

// each route is prefixed with /cohorts

/* GET all cohorts and display into a view listing. */
router.get("/", (req, res, next) => {
  CohortModel.find()
    .then((dbRes) => {
      res.render("all-cohorts", {
        cohorts: dbRes,
      });
    })
    .catch((dbError) => {
      next(dbError);
    });
});

router.post("/create", async (req, res, next) => {
  // this is the request body > an object containing the posted informations"
  // remember : keys are set on the HTML form with the name attributes !!!
  const { name, campusLocation } = req.body; // destructuring syntax here !!!!
  let avatar;
  if (req.file) {
    avatar = req.file.path;
  }
  try {
    await CohortModel.create({
      name,
      campusLocation,
    });
    res.redirect("/cohorts");
  } catch (err) {
    next(err);
  }
  // res.send("work in progress...");
});


router.get("/add-another", (req, res, next) => {
  res.render("create-cohort");
});

router.get("/edit/:id([a-z0-9]{24})", (req, res, next) => {
  CohortModel.findById(req.params.id)
    .then((cohort) => res.render("edit-cohort", cohort))
    .catch(next);
});

router.post("/edit/:id", async (req, res, next) => {
  const { name, campusLocation } = req.body; // destructuring syntax here !!!!
  try {
    await CohortModel.findByIdAndUpdate(req.params.id, {
      name,
      campusLocation,
    });
    res.redirect("/cohorts");
  } catch (err) {
    next(err);
  }
  // res.send("work in progress...");
});

router.get("/delete/:id", async (req, res, next) => {
  try {
    await CohortModel.findByIdAndDelete(req.params.id);
    res.redirect("/cohorts");
  } catch (err) {
    next(err); // a way to pass the error to the next middleware
    // so far, it's a convenient way for you to handle/display errors directly in the page
  }
});

router.get("/as-json", async (req, res, next) => {
  try {
    res.json(await CohortModel.find());
  } catch (dbError) {
    next(dbError); // will display the error
  }
});

module.exports = router;
