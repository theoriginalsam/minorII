 const express = require("express");

const mongoose = require("mongoose");

const Food = mongoose.model("Food");
const Order = mongoose.model('Order')

const router = express.Router();

router.route("order").get(function (req, res) {
  Order.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


router.route('order').post((req,res)=>{
    const order = new Order({
        _id:mongoose.Types.ObjectId(),
        quantity : req.body.quantity,
product:req.body.foodId    })
})

order.save().then(results=>{
    console.log(results)
})

module.exports = router;