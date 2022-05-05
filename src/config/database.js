const mongoose = require("mongoose");

const conectarnosBaseDatos = async () => {
    try{
        await mongoose.connect(process.env.MONGODBURI)
        console.log("Connected database!")
    }
    catch(error){
        console.log(error)
    }
}

module.exports = conectarnosBaseDatos;