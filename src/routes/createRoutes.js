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

module.exports = router;

// this has been implemented in the v1 so this file is unnecessary
