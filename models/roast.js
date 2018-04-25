const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roastSchema = new Schema({
  
  roastr: { type: String, required: true },
  recipient: { type: String, required: true },
  roast: { type: String, required: true },
  reply: { type: String, default: "" },
  roastScore: { type: Number, default: 0},
  replyScore: { type: Number, default: 0}
});

const Roast = mongoose.model("Roast", roastSchema);

module.exports = Roast;