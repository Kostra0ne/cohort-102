const mongoose = require("mongoose");
const Guitar = require("../models/Guitar");

mongoose
  .connect("mongodb://localhost/my-sexy-guitar")
  .then((res) => {
    console.log("yay connected to db");
  })
  .catch((error) => {
    console.log("failed to connect to db");
  });

const guitars = [
  {
    name: "Ibanez RG870",
    brand: "Ibanez",
    price: 1000,
    image:
      "https://img.audiofanzine.com/images/u/product/thumb3/ibanez-rg870qmz-125397.jpg",
  },
];

Guitar.create(guitars)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
