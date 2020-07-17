var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});
//time stamp add in the last

// ItemSchema.plugin(uniqueValidator, {
//   message: "Error, expected {PATH} to be unique.",
// });
mongoose.model("Food", ItemSchema);
