const rutasAprendizaje = require("./rutasAprendizajeRoute");

const routerApi = (app) => {
    app.use("/api/rutas", rutasAprendizaje);
}

module.exports = routerApi;