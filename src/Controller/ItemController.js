const Food = require("../models/Food");
exports.getFood = async (req, res, next) => {
  const result = await Food.find({}, (err) => {
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
