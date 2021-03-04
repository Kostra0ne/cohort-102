var express = require("express");
var router = express.Router();
const UserModel = require("./../model/User");

/* GET home page. */
router.get("/", (req, res, next) => {
  UserModel.find().then((users) => {
    res.render("index", { users });
  });
});

module.exports = router;
