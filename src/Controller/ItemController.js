const Food = require("../models/Food");
exports.getFood = async (req, res, next) => {
  try {
    const results = await Food.find();

    res.send(results);
  } catch (err) {
    console.log(err.message);
  }
};
exports.createFood = (req, res, next) => {};
exports.updateFood = (req, res, next) => {};
exports.deleteFood = (req, res, next) => {};
