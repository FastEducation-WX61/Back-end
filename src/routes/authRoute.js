const {Router} = require("express");
const router = Router();

// Controlador
const controladorAutenticacion = require("../controllers/autenticationController");

    
router.post("/", controladorAutenticacion.iniciarSesion);


module.exports = router;
