// this is our first seed file !!!

require("./../../config/mongodb");
const dataSet = require("./data/hackers.json");
// require the model hacker here
const HackerModel = require("./../../model/Hacker.js");

// console.log(dataSet);
// console.log(HackerModel);

HackerModel.insertMany(dataSet)
.then(dbSuccess => {
    console.log(dbSuccess);
})
.catch(dbError => {
    console.log(dbError);
})