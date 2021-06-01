const requireAuth = require("../../middlewares/requireAuth");

const express = require("express");
const mongoose = require("mongoose");

const Category = mongoose.model("Category");

const router = express.Router();

router.post("/addCategory", async (req, res) => {
  const name = req.body.name;
  try {
    // Create model
    let data = new Category({
      name,
    });
    //
    console.log(data);
    await data.save();

    res.send(data);
  } catch (err) {
    return res.status(422).send({ error: "Something went wrong" });
  }
});

module.exports = router;
