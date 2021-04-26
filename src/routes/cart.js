const { json } = require("express");
const express = require("express");

const mongoose = require("mongoose");

const Food = mongoose.model("Food");
const Cart = mongoose.model("cart");
const Cart1 = require("../models/cart1");

const router = express.Router();

// router.route("/cart").get(function (req, res) {
//   Cart.find({}, function (err, result) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });
router.get("/add-to-cart/:id", function (req, res, next) {
  var foodId = req.params.id;

  var cart = new Cart1(req.session.cart ? req.session.cart.items : {});

  Food.findById(foodId, function (err, product) {
    cart.add(product, product.id);
    req.session.cart = cart;
    const itemsInCart = cart.generateArray();

    res.send({ itemsInCart, total: cart.totalPrice });

    console.log(cart);
  });
});

router.post("/cart", (req, res, next) => {
  Food.findById(req.body.foodId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      console.log(product);
      const order = new Cart({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.foodId,
      });

      return order.save();
    })
    .then((result) => {
      res.status(201).json({
        message: "Order stored",
        createdOrder: {
          _id: result._id,
          product: result.product,
          quantity: result.quantity,
        },
        request: {
          type: "GET",
          url: "http://localhost:3000/cart/" + result._id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
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
