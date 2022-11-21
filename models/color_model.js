const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColorSchema = new Schema({
  name: {
    type: String,
  },
  code: {
    type: String,
  },
  qualities: {
    symbolizes: [
      {
        type: Array,
      },
    ],
    effects: [
      {
        type: Array,
      },
    ],
    positive: [
      {
        type: Array,
      },
    ],
    negative: [
      {
        type: Array,
      },
    ],
  },
});

module.exports = Color = mongoose.model("Color", ColorSchema);
