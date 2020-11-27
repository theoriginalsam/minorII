const requireAuth = require("../middlewares/requireAuth");

const express = require("express");

const mongoose = require("mongoose");

const Food = mongoose.model("Food");
const Category = mongoose.model('Category')

const router = express.Router();

router.route("/list").get(function (req, res) {
  Food.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {

      const category=Category.find({},(results)=>{
        console.log(results)
      })

    let array = category.map(el =>{
    thisCatData = result.filter(menu => menu.category === el)
    return{
      category:el,
      item:thisCatData
    }

  })
console.log(array)
  res.send(array);
  

     
    }
  });
});

module.exports = router;
// this has been implemented in the v1 , this file is unnecessary
