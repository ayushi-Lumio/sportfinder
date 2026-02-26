const mongoose = require("mongoose");

const sportSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number
});

module.exports = mongoose.model("Sport", sportSchema);