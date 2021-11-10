const requireAuth = require("../middlewares/requireAuth");
var fs = require("fs");

const express = require("express");
const mongoose = require("mongoose");
const genRanHex = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

var multer = require("multer");
const { randomFill } = require("crypto");
const Food = mongoose.model("Food");

const router = express.Router();

//var upload = multer({ dest: "uploads/" });  .....   upload.single("photo"), insert in btw create and async

// work for the server side validation remain
router.post("/create", async (req, res) => {
  const name = req.body.name;
  console.log(name);
  const category = req.body.category;

  const photo = req.body.photo;

  const price = req.body.price;

  const description = req.body.description;

  try {
    // Create model

    let model = new Food({
      name,
      category,
      photo: photo,
      price,
      description,
      ratings: [],
      rating: 0,
    });
    //
    // Save
    await model.save();

    res.send({ message: "Item Created", model: model });
  } catch (err) {
    if (err.name === "MongoError" && err.code === 11000)
      // this is another alternative to the unuqueValidator
      return res.send({ error: "Food already Exists!" });
    else return res.send({ error: err.message });
  }
});

router.post("/rate", async (req, res) => {
  const customerID = req.body.customerID;

  const foodID = req.body.foodID;
  const stars = req.body.stars;
  const review = {
    customerID,
    stars,
    foodID,
  };
  // foodId use garera food ko detail { id , price , name , des , ratings ,rating}
  // check if ratings array { userid } pailai chha ki nai
  // rapeplace , ratings push
  console.log(review);

  const used = await Food.findById({ _id: foodID });
  const isEdit =
    used.ratings.filter((el) => el.customerID === customerID).length > 0;

  try {
    // Create model

    let model = await Food.updateOne(
      { _id: foodID },
      { $push: { review: review } }
    );

    //
    // Save
    console.log(model);
    await model.save();

    res.send({ message: "Review Done Created", model: model });
  } catch (err) {
    if (err) {
      res.send(err);
    }
    // this is another alternative to the unuqueValidator
    else res.send({ error: err });
  }
});

// this has been implemented in the v1 so this file is unnecessary

module.exports = router;
