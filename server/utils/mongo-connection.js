"use strict";
const dburl ="mongodb+srv://sk3025:4bCAMy0DtMDYVLE7@cluster0.jhfij46.mongodb.net/user_details";
const mongoose = require("mongoose");
const chalk = require("chalk");
try {
  const connection = mongoose.connect(dburl);
} catch (err) {
  console.log(err);
}
const db = mongoose.connection;

db.on("connected", function () {
  console.log(chalk.green("Mongo connected successfully", dburl));
});

db.on("error", function (err) {
  console.log(chalk.red("Mongo Unable to connect to the database: ", err));
  throw new Error("mongo error: Connection Failure");
});
