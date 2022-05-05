const {model, Schema} = require("mongoose");

const schemaVideo = new Schema({
    nombre: String,
    img: String,
    rama: {
        type: Schema.Types.ObjectId,
        ref: "rama"
    }
});

module.exports = model("video", schemaVideo);