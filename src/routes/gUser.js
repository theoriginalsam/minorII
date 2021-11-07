const express = require("express");

const mongoose = require("mongoose");
const Users = mongoose.model("Users");

const router = express.Router();

router.post("/enter", async (req, res) => {
  const name = req.body.name;
  console.log(name);
  const email = req.body.email;
  const photo = req.body.photo;
  const phone = req.body.phone;
  const address = req.body.address;

  try {
    // Create model

    let model = new Users({
      name,
      email,
      photo: photo,
      address,
      phone,
    });
    //
    // Save
    await model.save();

    res.send({ message: "User Saved", model: model });
  } catch (err) {
    if (err.name === "MongoError" && err.code === 11000)
      // this is another alternative to the unuqueValidator
      return res.send({ error: "User already Exists!" });
    else return res.send({ error: err.message });
  }
});

module.exports = router;
