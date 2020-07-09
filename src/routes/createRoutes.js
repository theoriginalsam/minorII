const requireAuth = require("../middlewares/requireAuth");
require("./image");

const express = require("express");
const mongoose = require("mongoose");

const Food = mongoose.model("Food");

const router = express.Router();

router.post("/create", async (req, res) => {
  const name = req.body.name;
  const category = req.body.category;
  const photo = req.body.photo;
  const price = req.body.price;

  try {
    // Create model
    let model = new Food({
      name,
      category,
      photo,
      price,
    });
    //
    // Save
    await model.save();
    console.log(res.body);

    res.send({
      message: "Item Created!",
      model: model,
    });
  } catch (err) {
    return res.status(422).send({ error: "Something went wrong" });
  }
});

module.exports = router;
