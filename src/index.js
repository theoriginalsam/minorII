require("./models/User");
require("./models/Food");
require("./models/category");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const createRoutes = require("./routes/createRoutes");
const deleteRoutes = require("./routes/deleteRoutes");
const getRoutes = require("./routes/getRoutes");
const categoryroute = require("./routes/subroutes/categoryroute");
const getcategory = require("./routes/subroutes/getCategory");
const image = require("./routes/image");
const updateCategory = require("./routes/updateCategory");
const multer = require("multer");

const requireAuth = require("./middlewares/requireAuth");

const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET ,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use(createRoutes);
app.use(deleteRoutes);
app.use(getRoutes);
app.use(categoryroute);
app.use(getcategory);
app.use(updateCategory);
app.use(authRoutes);
app.use(image);
app.use(multer().single("photo")); // same name should be used in the front end form where we require image or select the image

const mongoUri =
  "mongodb+srv://minorii:minorii@cluster0.bki4l.mongodb.net/<dbname>?retryWrites=true&w=majority";
if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
  );
}
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo ");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
