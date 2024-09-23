const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/users", (req, res) => {
    //
});

app.use("/*", (request, response) => {
    response.status(404).send("Ruta no encontrada");
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
