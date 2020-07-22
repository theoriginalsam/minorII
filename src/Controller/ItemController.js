const Food = require("../models/Food");
exports.getFood = (req, res) => {
  Food.find()
    .then((foods) => {
      res
        .status(200)
        .json({ message: "Fetched foods successfully.", foods: foods });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      console.log("error");
    });
};
exports.createFood = (req, res, next) => {};
exports.updateFood = (req, res, next) => {};
exports.deleteFood = (req, res, next) => {};
