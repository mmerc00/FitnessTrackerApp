//Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
//PORT
const PORT = process.env.PORT || 3000;
//application middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// connecting to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
//Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
// Listen on port 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
