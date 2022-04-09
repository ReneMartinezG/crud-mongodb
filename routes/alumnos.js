/*jshint esversion: 6 */ 
const express = require("express");
 const router = express.Router();

 const alumnoController = require("../controllers/alumnoControllers.js");

 //mostrar alumnos (get)
 router.get("/", alumnoController.mostar);

//registrar alumnos (post)

router.post("/crear", alumnoController.crear);

//Actializar alumnos (post)
router.post("/editar", alumnoController.editar);

//Borrar alumnos (get)
router.get("/borrar/:id",alumnoController.eliminar);

 module.exports=router;

