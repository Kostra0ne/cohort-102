// this is our first seed file !!!
require("dotenv").config();
require("./../../config/mongodb");

const dataSet = require("./data/hackers.json");

// require the model hacker here
const HackerModel = require("./../../model/Hacker.js");

// console.log(dataSet); // the values to insert in database
// console.log(HackerModel); // the model holds all the required values

HackerModel.insertMany(dataSet)
.then(dbSuccess => {
    console.log(dbSuccess);
})
.catch(dbError => {
    console.log(dbError);
})