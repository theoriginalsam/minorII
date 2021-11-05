const requireAuth = require("../middlewares/requireAuth");
var fs = require("fs");

const express = require("express");
const mongoose = require("mongoose");

var multer = require("multer");
const Food = mongoose.model("Food");

const router = express.Router();

var upload = multer({ dest: "uploads/" });
// work for the server side validation remain
router.post("/create", upload.single("photo"), async (req, res) => {
  const name = req.body.name;
  const category = req.body.category;

  const loc = req.file.path;

  const photo = "https://minorii.herokuapp.com/" + loc;

  const price = req.body.price;
  const description = req.body.description;

  try {
    // Create model

    let model = new Food({
      name,
      category,
      image: photo,
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
