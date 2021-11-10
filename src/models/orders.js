var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
//validation for the unique trait in the db
var OrderSchema = new mongoose.Schema({
  totalCost: {
    type: Number,
  },
  deliveryType: {
    type: String,
  },
  customerAddress: {
    type: String,
  },
  customerEmail: {
    type: String,
  },
  customerPhone: {
    type: String,
  },
  customerName: {
    type: String,
  },
});

module.exports = mongoose.model("Orders", OrderSchema);
