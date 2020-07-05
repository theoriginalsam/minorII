const requireAuth = require("../middlewares/requireAuth");

const express = require("express");

const mongoose = require("mongoose");

const Food = mongoose.model("Food");

const router = express.Router();

router.put("/update/:_id", async (req, res) => {
  try {
    //
    // Get dat
    const _id = req.params._id;
    let result = await Food.findByIdAndUpdate(
      { _id },
      {
        ...req.body,
      }
    ).exec();
    const status = res.statusCode;

    //
    // Response
    res.send({
      message: "Sucessfully updated following item",
      updatedForm: result,
      status: status,
    });
  } catch (err) {
    //
    // Error response
    res.send({
      message: "item coul not be updated",
      err: err,
    });
  }
});

module.exports = router;
