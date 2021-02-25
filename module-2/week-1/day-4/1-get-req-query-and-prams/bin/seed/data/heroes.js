require("dotenv").config();
require("./../../config/mongodb");

const HeroeModel = require("./../../model/Heroe")
const heroes = require("./heroes.json");

console.log(heroes);

HeroeModel.insertMany(heroes);