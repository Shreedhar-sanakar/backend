const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  color_code: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = Card = mongoose.model("Card", CardSchema);
