 const { json } = require("express");
const express = require("express");

const mongoose = require("mongoose");

const Food = mongoose.model("Food");
const Cart = mongoose.model('cart')

const router = express.Router();

router.route("/cart").get(function (req, res) {
  Cart.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


router.route('/cart').post((req,res,next)=>{
    const order = new Cart({
        _id:mongoose.Types.ObjectId(),
        quantity : req.body.quantity,
product:req.body.foodId ,
price:req.body.price   })

order.save().then(results=>{
    console.log(results)
    res.status(201).json({
        message:'Sent'
         
    })
})


})

module.exports = router;