const {Router} = require("express");
const router = Router();

// Controlador
const controladorRutas = require("../controllers/rutasAprendizajeController");

    
router.get("/", controladorRutas.obtenerRutas);

router.get("/:id", controladorRutas.obtenerRuta);

router.post("/", controladorRutas.crearRuta);
        

module.exports = router;
