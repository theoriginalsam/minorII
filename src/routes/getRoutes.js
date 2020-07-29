const requireAuth = require("../middlewares/requireAuth");

const express = require("express");

const mongoose = require("mongoose");

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
// this has been implemented in the v1 so this file is unnecessary
