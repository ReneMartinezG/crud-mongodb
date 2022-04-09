/*jshint esversion: 6 */ 
const Alumno = require("../model/Alumno.js");

//mostrar 
module.exports.mostar = (req,res) =>{
    Alumno.find({}, (error, alumnos) => {
        if (error) {
            return res.status(500).json({
                message: "Error: Failed Read"
            });
        } 
        //console.log(alumnos);
        return res.render("index.ejs",{alum:alumnos});
    });
};

//crear
module.exports.crear= (req,res) => {
    //console.log(req.body);
    const alumno = new Alumno({
        name: req.body.nombre,
        edad: req.body.edad
    });

    alumno.save(function (error,alumno) {
        if (error){
            return res.status(500).json({
                message: "Error: Failed Insert"
            });
        }
        res.redirect("/");
    });
};

//Actializar

module.exports.editar = (req,res)=>{
    const id = req.body.id_editar;
    const name = req.body.nombre_editar;
    const edad = req.body.edad_editar;
    Alumno.findByIdAndUpdate(id, {name, edad}, (error, alumno)=>{
        if(error){
            return res.status(500).json({
                message: 'Error: Failed Update'
            });
        }
        res.redirect('/');
    });
};

//delete
module.exports.eliminar = (req,res) => {
    const id = req.params.id;

    Alumno.findByIdAndDelete(id,(error,alumnos) => {
        if(error){
            return res.status(500).json({
                message: 'Error: Failed Deleted'
            });
        }
        res.redirect('/');
    });

};