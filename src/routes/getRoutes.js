const express = require("express");
const mongoose = require("mongoose");
const { response } = require("express");

const Food = mongoose.model("Food");

const router = express.Router();

router.route("/list").get(function (req, res) {
  Food.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
