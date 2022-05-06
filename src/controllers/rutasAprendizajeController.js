const RutaAprendizaje = require("../models/RutaAprendizaje");

exports.obtenerRutas = async (req, res) => {
    try{
        const rutas = await RutaAprendizaje.find();
        res.status(200).json(
            rutas
        )
    }
    catch(error){
        res.status(400).json({
            msg: error
        })
    }
}
exports.crearRuta = async (req, res) => { // El async es para indicar que esto va a ser una función asincrona
    try{
        await RutaAprendizaje.create(req.body); // El await espera que el proceso termina para seguir
        res.status(200).json({
            msg: "Ruta agregada correctamente!"
        });
    }
    catch(error){
        console.log(error);
    }
}
