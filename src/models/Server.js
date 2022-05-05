const express = require("express");
const rutaAprendizaje = require("../routes/rutasAprendizajeRoute");
const conectarBaseDatos = require("../config/database");
const routerApi = require("../routes/indexRoute");
const cors = require("cors");
const fileUpload = require("express-fileupload");

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        // Llamamos a los métodos
        this.conectar();
        
        this.middlewares();

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
        this.app.listen(this.port,() =>{
            console.log("Server running in the port:", this.port)
        })
    }
}

module.exports = Server;

