const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const cloudinary = require("cloudinary").v2;
const {generateJsonWebToken} = require("../helpers/generarJWT");

cloudinary.config(process.env.CLOUDINARY_URL);

exports.obtenerUsuarios = (req, res) => {

}

exports.registrarUsuario = async (req, res) => {
    // Tenemos que comprobar si ese usuario existe en la base de datos

    //  En caso todo la info esté bien, seguimos con el registro
    
    const user = req.body;
    const {email} = user;

    // Encriptando contraseña
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(user.password, salt);


    // Subiendo imagen a la nube
    const {tempFilePath} = req.files.file;
    const {secure_url} = await cloudinary.uploader.upload(tempFilePath);

    user.img = secure_url;

    try{
        // Creamos el usuario
        await User.create(req.body);

        // Conseguir el id del usuario
        const {_id} = await User.findOne({email}); 
        // Creamos el token
        const token = await generateJsonWebToken(_id);

        return res.status(200).json({
            msg: "Usuario creado correctamente!",
            token
        })
    }
    catch(error){
        return res.status(400).json({
            msg: error
        })
    }
}