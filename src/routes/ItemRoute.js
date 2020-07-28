const express = require("express");
const ItemController = require("../Controller/ItemController");
const Food = require("../models/Food");
var multer = require("multer");
const router = express.Router();

var upload = multer({ dest: "uploads/" });

router.get("/list", ItemController.getFood);
router.post("/create", upload.single("photo"), ItemController.createFood);
router.put("/update/:id", ItemController.updateFood);
router.delete("/delete/:_id", ItemController.deleteFood);

module.exports = router;
