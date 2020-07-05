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

const requireAuth = require("./middlewares/requireAuth");

const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(createRoutes);
app.use(deleteRoutes);
app.use(getRoutes);
app.use(categoryroute);
app.use(getcategory);
app.use(authRoutes);

const mongoUri =
  "mongodb+srv://minorii:minorii@cluster0.bki4l.mongodb.net/<dbname>?retryWrites=true&w=majority";
if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
  );
}
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
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
