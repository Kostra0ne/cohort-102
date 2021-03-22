const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const totoSchema = new Schema({
  name: { type: String },
  brand: String,
  image: String,
  price: Number,
});

const Toto = mongoose.model("Toto", totoSchema);

module.exports = Toto;
