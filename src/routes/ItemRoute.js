const express = require("express");
const ItemController = require("../Controller/ItemController");
const Food = require("../models/Food");
const router = express.Router();

router.get("/list", ItemController.getFood);
router.post("/create", ItemController.createFood);
router.put("/update/:id", ItemController.updateFood);
router.delete("/delete/:id", ItemController.deleteFood);

module.exports = router;
