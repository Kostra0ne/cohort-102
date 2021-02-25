const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const heroeSchema = new Schema({
  name: String,
  powerstats: {
    intelligence: String,
    strength: String,
    speed: String,
    durability: String,
    power: String,
    combat: String,
  },
  biography: {
    "full-name": String,
    "alter-egos": String,
    aliases: [String],
    "place-of-birth": String,
    "first-appearance": String,
    publisher: String,
    alignment: String,
  },
});

const HeroModel = mongoose.model("heroes", heroeSchema);
module.exports = HeroModel;
