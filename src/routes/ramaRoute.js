const {Router} = require("express");
const router = Router();

// Controlador
const controladorRamas = require("../controllers/ramaController");

    
router.get("/", controladorRamas.obtenerRamas);

router.get("/:id", controladorRamas.obtenerRama);

router.post("/", controladorRamas.crearRama);
        

module.exports = router;
