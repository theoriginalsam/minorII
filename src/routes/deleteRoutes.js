const requireAuth = require("../middlewares/requireAuth");

const express = require("express");

const mongoose = require("mongoose");

const Food = mongoose.model("Food");

const router = express.Router();

router.delete("/delete/:_id", async (req, res) => {
  try {
    //
    // Get data
    const id = req.params._id;

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
    res.send({
      message: "Could not delete item because of error",
      err: err,
    });
  }
});

module.exports = router;
