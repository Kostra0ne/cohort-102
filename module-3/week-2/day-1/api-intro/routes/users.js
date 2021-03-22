const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  // res.render("users.hbs", { users: ["Toto", "Fifi"] });

  try {
    // find something in db
    res.status(200).json(["Toto", "Fifi"]);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
