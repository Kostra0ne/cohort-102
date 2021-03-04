const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    isAdmin: Boolean
});

// create a simple model
const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;