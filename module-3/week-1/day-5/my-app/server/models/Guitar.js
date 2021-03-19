const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guitarSchema = new Schema({
  name: String,
  brand: String,
  price: Number,
  image: String,
});

const Guitar = mongoose.model("Guitar", guitarSchema);

module.exports = Guitar;
