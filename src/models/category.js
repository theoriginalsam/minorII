var mongoose = require("mongoose");
var CategoryScema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
mongoose.model("Category", CategoryScema);
