const express = require("express");
const getAlumnos = require("./data/alumnos").getAlumnos;
const middlewareValidation = require("./middleware/validation");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("¡Hola Mundo!");
});

app.get("/alumnos/:apellido", middlewareValidation, (request, response) => {
    const alumnoData = getAlumnos(request.params.apellido);
    response.send(alumnoData ?? "No se encontraron coincidencias.");
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
