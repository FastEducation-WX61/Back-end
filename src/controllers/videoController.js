const Video = require("../models/Video");

exports.obtenerVideos = async (req, res) => {
    try{
        const videos = await Video.find();
        res.status(200).json({
            videos
        })
    }
    catch(error){
        res.status(400).json({
            msg: error
        })
    }
}
exports.subirVideo = async (req, res) => { // El async es para indicar que esto va a ser una función asincrona
    try{
        await Video.create(req.body); // El await espera que el proceso termina para seguir
        res.status(200).json({
            msg: "Video agregado correctamente!"
        });
    }
    catch(error){
        console.log(error);
    }
}
