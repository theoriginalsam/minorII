const requireAuth = require("../middlewares/requireAuth");

const express = require("express");

const mongoose = require("mongoose");

const Food = mongoose.model("Food");

const router = express.Router();

router.post("/edit/:_id", async (req, res) => {
  try {
    //
    // Get data
    const id = req.params._id;

    let result = await Food.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    ).exec();
    const status = res.statusCode;

    //
    // Response
    res.send({
      message: "Sucessfully updated item",
      result: result,
      status: status,
    });
  } catch (err) {
    res.send({
      message: "Could not update ",
      err: err,
    });
  }
});

//id is required to delete

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
      message: "Could not delete ",
      err: err,
    });
  }
});

//route for dele
module.exports = router;
