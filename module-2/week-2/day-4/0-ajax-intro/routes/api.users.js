var express = require("express");
var router = express.Router();
const UserModel = require("./../model/User");

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log(req.query); // query string object
  // const exp = new RegExp(req.query.name); // creating a regular expression
  // const dbRes = await User.find({ name: { $regex: exp } });
  res.json("todo fetch user from db");
});

router.post("/", async (req, res, next) => {
  try {
    res.json(await UserModel.create(req.body));
  } catch (dbError) {
    res.json({
      error: dbError,
      level: "error",
    });
  }
});

// create a post route here
module.exports = router;
