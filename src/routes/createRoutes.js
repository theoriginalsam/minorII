const requireAuth = require("../middlewares/requireAuth");
require("./image");

const express = require("express");
const mongoose = require("mongoose");

var multer = require("multer");
const Food = mongoose.model("Food");

const router = express.Router();

var upload = multer({ dest: "uploads/" });
router.post("/create", upload.single("photo"), async (req, res) => {
  const name = req.body.name;
  const category = req.body.category;
  const photo = req.file.path;
  console.log(photo);
  const price = req.body.price;
  //just create the api to store image path in the data base
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
      return res.send({ error: "Food already Exists!" });
    else return res.send({ error: err.message });
  }
});

module.exports = router;
