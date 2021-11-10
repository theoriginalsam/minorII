const express = require("express");

const mongoose = require("mongoose");
const Users = mongoose.model("Users");

const router = express.Router();

router.get("/profile", async (req, res) => {
  const email = req.body.email;
  console.log(email);
  Users.findOne({ email }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
