const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// // planing how the hacker document should like like, before database insertion
const hackerModel = new Schema({
  name: String,
  email: String,
  favLangage: String,
  avatar: {
    type: String,
  },
  isRegistered: Boolean
});

// // use the schema (the plan) to generate a model
// // the model will grant you access to a bunch a methods
// // to ... C.R.U.D !!!
const HackerModel = mongoose.model("hackers", hackerModel);
// // just above : the first argument is the collection name id db
// // the seconde arg is the scheam / plan / shape of upcoming documents

module.exports = HackerModel;