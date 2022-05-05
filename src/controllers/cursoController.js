const Curso = require("../models/Curso");

exports.crearCurso = async(req, res) =>{
    try{
        await Curso.create(req.body);
        req.status(200).json({
            msg: "El curso fue agregado correctamente!"
        })
    }
    catch(error){
        res.status(400).json({
            msg: error
        })
    }
}

exports.obtenerCursos = async (req, res) => {
    try{
        const cursos = await Curso.find();
        req.status(200).json({
            cursos
        })
    }
    catch(error){
        res.status(400).json({
            msg: error
        })
    }

}