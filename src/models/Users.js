var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
//validation for the unique trait in the db
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
});
//time stamp add in the last if required

// ItemSchema.plugin(uniqueValidator, {
//   message: "Error, expected {PATH} to be unique.",
// });
module.exports = mongoose.model("Users", UserSchema);
