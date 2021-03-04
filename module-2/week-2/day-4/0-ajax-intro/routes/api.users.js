var express = require("express");
var router = express.Router();
const UserModel = require("./../model/User");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  let query = {}; // empty object will wind every users

  if (req.query.name) { // if we send a query string with the get request (?name=whatever)
    const exp = new RegExp(req.query.name); // creating a regular expression
    query.name = { $regex: exp }; // create an object literal that will macth mongo query's expectations
  }
  // so query is either an empty object,or the one defined just above
  try {
    res.status(200).json(await UserModel.find(query)); // use the object literal as a query filter
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).json(await UserModel.create(req.body));
  } catch (dbError) {
    res.json({
      error: dbError,
      level: "error",
    });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    res.status(202).json(await UserModel.findOneAndDelete({ _id: req.params.id }));
  } catch (dbError) {
    res.json({
      error: dbError,
      level: "error",
    });
  }
});

// create a post route here
module.exports = router;
