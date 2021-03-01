var express = require("express");
var router = express.Router();
const axios = require("axios");

const URL = "https://api.chucknorris.io/jokes/random"; // endpoint here :)

function getARandomJoke() {
  return axios.get(URL);
}

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const apiRes = await getARandomJoke();
    // res.status(200).json(apiRes.data);
    res.status(200).render("index", { joke: apiRes.data });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
