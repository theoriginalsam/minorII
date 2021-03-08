var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
//validation for the unique trait in the db
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
  description:{
    type:String,
    required:true
  },
  ingredients:{
    type:String,
    required:true
  },
  imageBase64String: {
    type: String,
    required: true,
  },
  imageType:{
    type: String,
    required: true,

  }
});
//time stamp add in the last

// ItemSchema.plugin(uniqueValidator, {
//   message: "Error, expected {PATH} to be unique.",
// });
module.exports = mongoose.model("Food", ItemSchema);
