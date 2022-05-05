const {Router} = require("express");
const router = Router();

// Controlador
const controladorUsuario = require("../controllers/usuarioController");

    
router.get("/", controladorUsuario.obtenerUsuarios);

router.post("/", controladorUsuario.registrarUsuario);
        

module.exports = router;
