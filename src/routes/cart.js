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


router.post("/cart", (req, res, next) => {
  
  Food.findById(req.body.foodId)
    .then(product => {
      if (!product) {
        return res.status(404).json({
          message: "Product not found"
        });
      }

      console.log(product)
      const order = new Cart({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.foodId,
        
       
      });
      
      return order.save();
    })
    .then(result => {
      
      res.status(201).json({
        message: "Order stored",
        createdOrder: {
          _id: result._id,
          product: result.product,
          quantity: result.quantity,
         
        },
        request: {
          type: "GET",
          url: "http://localhost:3000/cart/" + result._id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


// router.route('/cart').post((req,res,next)=>{
//     const order = new Cart({
//         _id:mongoose.Types.ObjectId(),
//         quantity : req.body.quantity,
// product:req.body.foodId ,
//   })

// order.save().then(results=>{
//     console.log(results)
//     res.status(201).json({
//         message:'Sent'
         
//     })
// })


// })

module.exports = router;