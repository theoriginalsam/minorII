const Food = require("../models/Food");
exports.getFood = (req, res, next) => {
  Food.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
exports.createFood = (req, res, next) => {};
exports.updateFood = (req, res, next) => {};
exports.deleteFood = (req, res, next) => {};
