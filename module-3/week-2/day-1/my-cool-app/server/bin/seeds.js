require("dotenv").config();
require("./config/dbConnection");

const TotoModel = require("../../models/Toto");

console.log("Hello world");

const people = [{}];

TotoModel.create(people).then((createdDocuments) => {
  console.log(createdDocuments.length);
});
