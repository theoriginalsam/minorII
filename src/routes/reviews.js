const requireAuth = require("../middlewares/requireAuth");

const express = require("express");
const mongoose = require("mongoose");

const Food = mongoose.model("Food");
const Users = mongoose.model("Users");
const Reviews = mongoose.model("Reviews");

const router = express.Router();

router.post("/add-review", async (req, res) => {
  const customer = await Users.findOne(
    { "details.id": req.authID },
    { _id: 1, details: 1 }
  );
  const Fooder = await Food.findOne(
    { "details.id": req.authID },
    { _id: 1, details: 1 }
  );

  const review = {
    customerID: customer._id,
    stars: req.body.stars,
    FoodID: Fooder._id,
  };

  try {
    // Create model

    const stars = review.stars;
    customerID = review.customerID;
    FoodID = review.FoodID;

    let model = new Reviews({
      stars,
      customerID,
      FoodID,
    });
    //
    // Save
    await model.save();

    res.send({ message: "Review Done", model: model });
  } catch (err) {
    if (err) return res.send({ error: err.message });
  }

  const reviews = Reviews.find({ FoodID: FoodID }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log("this is the data" + result);
    }
  });
  console.log("ao");
  const array = reviews.stars;
  console.log(array);
});

module.exports = router;
