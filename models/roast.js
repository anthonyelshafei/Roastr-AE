const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roastSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  roastr: { type: String, required: true },
  recipient: { type: String, required: true },
  roast: { type: String, required: true },
  reply: { type: String, required: true, default: "" },
  roastScore: { type: Number, required: true, default: 0},
  replyScore: { type: Number, required: true, default: 0}
}, { _id: false });

const Roast = mongoose.model("Roast", roastSchema);

module.exports = Roast;