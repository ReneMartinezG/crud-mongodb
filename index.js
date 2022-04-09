/*jshint esversion: 6 */ 
const express = require("express");
const port = 3000;
const app = express();
const db = require("./bd-connection.js");
//settings
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//static files
app.use(express.static("public"));

//routes
app.use(require("./routes/alumnos.js"));


app.listen(port, () => {
    console.log(`Server on port ${port}`);
});