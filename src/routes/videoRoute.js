const {Router} = require("express");
const router = Router();

// Controlador
const controladorVideos = require("../controllers/videoController");

    
router.get("/", controladorVideos.obtenerVideos);

router.get("/:id", controladorVideos.obtenerVideo);

router.post("/", controladorVideos.subirVideo);
        

module.exports = router;
