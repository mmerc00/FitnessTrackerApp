const express = require("express");
// const mongojs = require("mongojs");
// const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();

app.use(logger("dev"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/custommethods",
  { useNewUrlParser: true }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const db = mongojs(databaseUrl, collections);
db.on("error", (error) => {
  console.log("Database Error:", error);
});

//app.use(require"routes?)
// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
