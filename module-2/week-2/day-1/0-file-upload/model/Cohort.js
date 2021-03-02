const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cohortSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  campusLocation: {
    type: String,
    enum: [
      "miami",
      "paris",
      "berlin",
      "amsterdam",
      "saol paulo",
      "mexico",
      "madrid",
      "barcelona",
    ],
  },
});

const CohortModel = mongoose.model("cohorts", cohortSchema);
// // just above : the first argument is the collection name id db
// // the seconde arg is the scheam / plan / shape of upcoming documents

module.exports = CohortModel;
