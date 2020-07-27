const Food = require("../models/Food");
exports.getFood = async (req, res, next) => {
  try {
    const results = await Food.findMany();

    res.send(results);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
exports.createFood = (req, res, next) => {};
exports.updateFood = (req, res, next) => {};
exports.deleteFood = (req, res, next) => {};
