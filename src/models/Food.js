var mongoose = require("mongoose");
var ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    default: "",
  },

  price: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
    default: "",
  },
});
mongoose.model("Food", ItemSchema);
