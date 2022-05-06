const Rama = require("../models/Rama");

exports.crearRama = async(req, res) =>{
    try{
        await Rama.create(req.body);
        res.status(200).json({
            msg: "La rama fue agregado correctamente!"
        })
    }
    catch(error){
        res.status(400).json({
            msg: error
        })
    }
}

exports.obtenerRamas = async (req, res) => {
    try{
        const ramas = await Rama.find();
        res.status(200).json(
            ramas
        )
    }
    catch(error){
        res.status(400).json({
            msg: error
        })
    }

}