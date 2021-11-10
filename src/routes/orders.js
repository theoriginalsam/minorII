const requireAuth = require("../middlewares/requireAuth");
var fs = require("fs");
const moment = require("moment")

const express = require("express");
const mongoose = require("mongoose");
const Orders = require("../models/orders");
const Food = mongoose.model("Food");
const router = express.Router();

router.post("/order", async (req, res) => {
  

  try {
    // Create model
    const cartTotalItems = req.body.cartTotalItems
    const totalCost = req.body.totalCost;
    const deliveryMethod = req.body.deliveryMethod;
    const customerAddress = req.body.customerAddress
    const customerEmail = req.body.customerEmail
    const customerName=req.body.customerName,
    const totalCost = req.body.totalCost
    const status = req.body.status


    
let model = new Orders({



    totalCost,
    deliveryMethod,
    customerAddress,
    customerEmail,
    customerName,
    status,
cartTotalItems,
date:moment().format('MM:DD:YY HH:MM:SS a')


})


    await model.save();

    res.send({ message: "Orders Confirmed", model: model });
  } catch (err) {
    if (err){
        console.log(err)
    }
else
     return res.send({ error: err.message });
  }
});




module.exports = router;