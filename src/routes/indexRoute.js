const rutasAprendizaje = require("./rutasAprendizajeRoute");
const cursos = require("./cursoRoute");
const ramas = require("./ramaRoute");
const videos  = require("./videoRoute");

const routerApi = (app) => {
    app.use("/api/rutas", rutasAprendizaje);
    app.use("/api/cursos", cursos);
    app.use("/api/ramas", ramas);
    app.use("/api/videos", videos);
}

module.exports = routerApi;