const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
//middleware
// app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

//routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// var myfunc = function(text){ console.log(text) }
// var myfunc = require("./routes/demo");
// myfunc("SOME TEXT!");

// require("./routes/demo")("BATMAN IS AWESOME!!!");

// (function (x) {
//   console.log(x);
// })("WOWZERS!!!");

// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
