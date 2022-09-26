const mongoose = require("mongoose");
const { log } = require("mercedlogger");
require("dotenv").config();

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGODB_URI =
  "mongodb+srv://Mistborn:Niaxuri3@cluster0.rnzgxcg.mongodb.net/test";
console.log(MONGODB_URI);

mongoose.connect(MONGODB_URI, option).then(
  function () {
    log.green("Connected to Mongo");
  },
  function (err) {
    log.red("Error connecting to Mongo" + err);
  }
);

// EXPORT CONNECTION
module.exports = mongoose;
