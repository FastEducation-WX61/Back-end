const {Router} = require("express");
const router = Router();

// Controlador
const controladorCurso = require("../controllers/cursoController");

    
router.get("/", controladorCurso.obtenerCursos);

router.post("/", controladorCurso.crearCurso);
        

module.exports = router;
