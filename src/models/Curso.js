const {model, Schema} = require("mongoose");

const schemaCurso = new Schema({
    nombre: String,
    img: String,
    totalRamas:Number,
    ruta: {
        type: Schema.Types.ObjectId,
        ref: "ruta"
    }
});

module.exports = model("curso", schemaCurso);

