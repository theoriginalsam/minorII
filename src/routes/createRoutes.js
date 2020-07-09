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

    res.send({
      message: "Item Created",
      model: model,
    });
  } catch (err) {
    if (err.name === "MongoError" && err.code === 11000)
      return res.send({ error: "Food already Exists" });
    else return res.send({ error: err.message });
  }
});

module.exports = router;
