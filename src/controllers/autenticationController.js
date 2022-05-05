const Usuario = require("../models/User");
const {generateJsonWebToken} = require("../helpers/generarJWT");
const bcrypts = require("bcryptjs");

exports.iniciarSesion = async (req, res) =>{

    const {email, password} = req.body;

    // Conseguimos el usuario de la base de datos
    const user = await Usuario.findOne({email});

    if(!user){
        return res.status(400).json({
            msg: "Ese correo no está registrado"
        })
    }
    else{
        // Comprobamos si la contraseña ingresada es igual a la de la base de datos
        const validarContrasenia = bcrypts.compareSync(password,user.password);

        if(!validarContrasenia){
            return res.status(400).json({
                msg: "Las contraseñas no son iguales"
            })
        }

        const token = await generateJsonWebToken(user._id);

        // En caso todo esté bien, le enviamos el token
        return res.status(200).json({
            token
        })
    }

}