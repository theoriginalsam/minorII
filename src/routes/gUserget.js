const express = require("express");

const mongoose = require("mongoose");
const Users = mongoose.model("Users");

const router = express.Router();

router.get("/enter", async (req, res) => {
  Users.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
