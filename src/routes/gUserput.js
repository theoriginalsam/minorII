const requireAuth = require("../middlewares/requireAuth");

const express = require("express");

const mongoose = require("mongoose");

const Users = mongoose.model("Users");

const router = express.Router();

router.post("/profile", async (req, res) => {
  try {
    //
    // Get dat
    const _id = req.body._id;
    let result = await Users.findByIdAndUpdate(
      {
        _id,
      },
      {
        ...req.body,
      }
    ).exec();
    const status = res.statusCode;

    //
    // Response
    res.send({
      message: "Sucessfully updated following user",
      updatedForm: result,
      status: status,
    });
  } catch (err) {
    //
    // Error response
    res.send({ message: "user not be updated", err: err });
  }
});

module.exports = router;
