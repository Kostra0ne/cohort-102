var express = require("express");
var router = express.Router();
const UserModel = require("./../model/User");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  // todo create a search route
  let query = {};

  if (req.query.name) {
    const exp = new RegExp(req.query.name); // creating a regular expression
    query.name = { $regex: exp };
  }

  try {
    res.status(200).json(await UserModel.find(query));
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
