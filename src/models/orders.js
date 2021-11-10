var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
//validation for the unique trait in the db
var OrderSchema = new mongoose.Schema({
  cartTotalItems: [
    {
      _id: String,
      quantity: Number,
    },
  ],
  totalCost: {
    type: Number,
  },
  deliveryMethod: {
    type: String,
  },
  customerAddress: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerPhone: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  totalCost: Number,
  status: String,
});

module.exports = mongoose.model("Orders", OrderSchema);
