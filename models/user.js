const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  score: { type: Number, required: true, default: 0}
}, { _id: false });

const User = mongoose.model("User", userSchema);

module.exports = User;