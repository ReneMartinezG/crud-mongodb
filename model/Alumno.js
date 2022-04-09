/*jshint esversion: 6 */ 
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const alumnosSchema = new schema({
    "name": String,
    "edad": Number
},{versionkey:false});

module.exports= mongoose.model('alumnos',alumnosSchema);