require("./models/User");
require("./models/Food");
require("./models/category");
require("./models/cart");
require("./models/Users");
require("./models/reviews");
require("./models/orders");

var session = require("express-session");
const carts = require("./routes/cart");
const morgan = require("morgan");
const foodRouter = require("./routes/ItemRoute");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const createRoutes = require("./routes/createRoutes");
const reviews = require("./routes/reviews");

const deleteeditRoutes = require("./routes/deleteeditRoutes");
const getRoutes = require("./routes/getRoutes");
const categoryroute = require("./routes/subroutes/categoryroute");
const getcategory = require("./routes/subroutes/getCategory");
const gUser = require("./routes/gUser");
const gUserget = require("./routes/gUserget");
const gUserPut = require("./routes/gUserput");
const Orders = require("./routes/orders");
var MongoStore = require("connect-mongo")(session);

const updateCategory = require("./routes/updateCategory");

const requireAuth = require("./middlewares/requireAuth");

const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ msg: "This has CORS enabled 🎈" });
});
app.use(
  session({
    secret: "mysupersecret",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use(morgan("dev"));
app.use(carts);
app.use(createRoutes);
app.use(deleteeditRoutes);
app.use(getRoutes);
app.use(categoryroute);
app.use(getcategory);
app.use(updateCategory);
app.use(authRoutes);
app.use(gUser);
app.use(gUserget);
app.use(reviews);
app.use(Orders);
app.use(gUserPut);
app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});

//for future code readibility
app.use("/v1", foodRouter);
// same namshould e used in the frnt end form where we require image or select the image

const mongoUri =
  " mongodb+srv://samir:samir@cluster0.sj8rp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
if (!mongoUri) {
  throw new Error(`MongoURI Error`);
}
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connection successfull", () => {
  console.log("Connected to mongo ");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo DB ", err);
});

app.get("/", (req, res) => {
  //requireAuth here in middle
  res.send(`Your email: ${req.user.email}`);
});

app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
