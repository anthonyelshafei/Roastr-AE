const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, minLength:6, maxLength:12, required: true },
  password: { type: String, minLength:8, maxLength:16, required: true },
  image: { type: String, required: true },
  score: { type: Number, default: 0}
});

const User = mongoose.model("User", userSchema);

module.exports = User;