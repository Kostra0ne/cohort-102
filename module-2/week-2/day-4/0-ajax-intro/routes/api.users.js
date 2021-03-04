var express = require("express");
var router = express.Router();

const users = [
  { name: "foo" },
  { name: "fred" },
  { name: "fionna" },
  { name: "bar" },
  { name: "basil" },
  { name: "bastien" },
  { name: "xuan" },
  { name: "nil" },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log(req.query);
  res.json(users);
});

// create a post route here
module.exports = router;
