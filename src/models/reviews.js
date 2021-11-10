var mongoose = require("mongoose");
var Food = require("./Food");
var uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
//validation for the unique trait in the db
var ReviewSchema = new mongoose.Schema({
  customerID: String,
  FoodID: String,
  stars: {
    type: Number,
  },
});
//time stamp add in the last if required

// ItemSchema.plugin(uniqueValidator, {
//   message: "Error, expected {PATH} to be unique.",
// });
module.exports = mongoose.model("Reviews", ReviewSchema);
