const requireAuth = require("../../middlewares/requireAuth");

const express = require("express");

const mongoose = require("mongoose");

const Category = mongoose.model("Category");

const router = express.Router();

router.route("/listCategory").get(function (req, res) {
  Category.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
