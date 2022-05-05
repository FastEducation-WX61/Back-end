const {model, Schema} = require("mongoose");

const schemaRutaAprendizaje = new Schema({
    nombre: String,
    img: String,
    totalCursos: Number
});

module.exports = model("ruta", schemaRutaAprendizaje);