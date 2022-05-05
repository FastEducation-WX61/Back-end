const {model, Schema} = require("mongoose");

const schemaUser = new Schema({
    nombre: String,
    email: String,
    password: String,
    img: String,
    premium: Boolean
});

module.exports = model("usuario", schemaUser);