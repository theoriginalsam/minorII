const express = require("express");
const ItemController = require("../Controller/ItemController");

const router = express.Router();

router.get("/list", ItemController.getFood);
router.post("/post", feedController.createPosts);

module.exports = router;
