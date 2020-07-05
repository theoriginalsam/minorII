const requireAuth = require("../../middlewares/requireAuth");

const express = require("express");

const mongoose = require("mongoose");

const Category = mongoose.model("Food");

const router = express.Router();

router.route("/listCategory").get(requireAuth, function (req, res) {
  Category.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
