const requireAuth = require("../middlewares/requireAuth");
var fs = require("fs");
const moment = require("moment");

const express = require("express");
const mongoose = require("mongoose");
const Orders = require("../models/orders");
const Food = mongoose.model("Food");
const router = express.Router();

router.get("/order", async (req, res) => {
  Orders.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
router.post("/order", async (req, res) => {
  try {
    // Create model
    const cartTotalItems = req.body.cartTotalItems;
    const totalCost = req.body.totalCost;
    const deliveryMethod = req.body.deliveryMethod;
    const customerAddress = req.body.customerAddress;
    const customerEmail = req.body.customerEmail;
    const customerPhone = req.body.customerPhone;
    const customerName = req.body.customerName;
    const status = req.body.status;

    let model = new Orders({
      totalCost,
      deliveryMethod,
      customerAddress,
      customerEmail,
      customerName,
      customerPhone,
      status,
      cartTotalItems,
      date: moment().format("MMMM Do YYYY HH:MM:SS a"),
    });

    await model.save();

    res.send({ message: "Orders Confirmed", model: model });
  } catch (err) {
    if (err) {
      console.log(err);
    } else return res.send({ error: err.message });
  }
});
router.post("/orderStatus", async (req, res) => {
  try {
    // Create model
    const id = req.body._id;
    const Nstatus = req.body.status;

    let model = await Orders.updateOne(
      { _id: id },
      { $set: { status: Nstatus } }
    );

    await model.save();

    res.send({ message: "Status Change", model: model });
  } catch (err) {
    if (err) {
      console.log(err);
    } else return res.send({ error: err.message });
  }
});

module.exports = router;
