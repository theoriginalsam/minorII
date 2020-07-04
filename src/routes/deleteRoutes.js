const express = require("express");
const mongoose = require("mongoose");

const Food = mongoose.model("Food");

const router = express.Router();

router.delete("/delete/:_id", async (req, res) => {
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
});

module.exports = router;
