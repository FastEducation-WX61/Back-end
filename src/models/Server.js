const express = require("express");
const rutaAprendizaje = require("../routes/rutasAprendizajeRoute");
const conectarBaseDatos = require("../config/database");
const routerApi = require("../routes/indexRoute");
const cors = require("cors");
const fileUpload = require("express-fileupload");

class Server{
    constructor(){
        this.app = express();
        // Llamamos a los métodos
        
        this.middlewares();

        this.conectar();

        this.llamarRutas();
    }
    middlewares(){ // Es un proceso que ocurre cuando se hace una petición HTTP

        this.app.use(cors());

        // Me permite recibir info tipo JSON
        this.app.use(express.json());

        // Me permite recibir información
        this.app.use(express.urlencoded({extended:true}));

        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: "/tmp/"
        }))

    }
    async conectar(){
        await conectarBaseDatos();
    }
    llamarRutas(){
        routerApi(this.app);
    }
    listen(){
        this.app.listen(3000,() =>{
            console.log("SERVER RUNNING")
        })
    }
}

module.exports = Server;

