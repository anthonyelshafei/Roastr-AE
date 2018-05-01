const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var d = new Date();
var localDate = d.toLocaleDateString();

const roastSchema = new Schema({
  
  roastrName: { type: String, required: true },
  roastrImage: { type: String, required: true },
  roastrScore: { type: Number, required: true },
  recipientName: { type: String, required: true },
  recipientImage: { type: String, required: true },
  recipientScore: { type: Number, required: true },
  roast: { type: String, required: true },
  reply: { type: String, default: "" },
  roastScore: { type: Number, default: 0},
  replyScore: { type: Number, default: 0},
  date: { type: Date, default: localDate },
  replied: {type: Boolean, default: false},
  voters: {type: Array, default: [] }
});

const Roast = mongoose.model("Roast", roastSchema);

module.exports = Roast;