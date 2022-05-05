const {model, Schema} = require("mongoose");

const schemaRama = new Schema({
    nombre: String,
    img: String,
    totalVideos: Number,
    curso:{
        type: Schema.Types.ObjectId,
        ref: "curso"
    } 
});

module.exports = model("rama", schemaRama);