exports.getFood = (req, res, next) => {
  Food.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
exports.createPosts = (req, res, next) => {
  const title = req.body.title;

  const content = req.body.content;
  res.status(201).json({
    message: "Successful",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "Samir" },
      createdAt: new Date(),
    },
  });
};
