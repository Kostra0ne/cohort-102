require("dotenv").config();
require("./../../config/mongodb");

const HeroeModel = require("./../../model/Heroe")
const heroes = require("./data/heroes.json");

console.log(heroes);

HeroeModel.insertMany(heroes);