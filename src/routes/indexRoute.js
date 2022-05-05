const rutasAprendizaje = require("./rutasAprendizajeRoute");
const cursos = require("./cursoRoute");
const ramas = require("./ramaRoute");
const videos  = require("./videoRoute");
const usuarios = require("./usuarioRoute");
const auth = require("./authRoute");

const routerApi = (app) => {
    app.use("/api/rutas", rutasAprendizaje);
    app.use("/api/cursos", cursos);
    app.use("/api/ramas", ramas);
    app.use("/api/videos", videos);
    app.use("/api/usuarios", usuarios);
    app.use("/api/auth", auth);
}

module.exports = routerApi;