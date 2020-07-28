const Food = require("../models/Food");
exports.getFood = async (req, res, next) => {
  try {
    const results = await Food.find();

    res.send(results);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
exports.createFood = async (req, res, next) => {
  const name = req.body.name;
  const category = req.body.category;
  const photo = req.file.path;
  const price = req.body.price;
  //just create the api to store image path in the data base
  try {
    // Create model

    let model = new Food({
      name,
      category,
      photo,
      price,
    });
    //
    // Save
    await model.save();

    res.send({
      message: "Item Created",
      model: model,
    });
  } catch (err) {
    if (err.name === "MongoError" && err.code === 11000)
      // this is another alternative to the unuqueValidator
      return res.send({ error: "Food already Exists!" });
    else return res.send({ error: err.message });
  }
};
exports.deleteFood = async (req, res, next) => {
  try {
    //
    // Get data
    const id = req.params._id;
    console.log(id);
    let result = await Food.findByIdAndRemove(
      { _id: id },
      {
        ...req.body,
      }
    ).exec();
    const status = res.statusCode;

    //
    // Response
    res.send({
      message: "Sucessfully deleted item",
      result: result,
      status: status,
    });
  } catch (err) {
    //
    // Error response
    res.send({
      message: "Could not delete item",
      err: err,
    });
  }
};
exports.updateFood = (req, res, next) => {};
