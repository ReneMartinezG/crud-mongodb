/*jshint esversion: 6 */ 
const mongoose = require("mongoose");

const url = "mongodb://localhost/crud_nodejs";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection failed"));
db.once("open", function callback(){
    console.log("Connection successful!!!");
});

module.exports = db;