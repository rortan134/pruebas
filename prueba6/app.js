const express = require("express");
const middlewareValidation = require("./middleware/validation");

const app = express();
const port = 3000;

// Swagger
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "ACME Technologies",
            version: "1.0.0",
            description: "App APIRest",
            contact: {
                name: "John Doe",
                email: "john@doe.com",
            },
        },
        servers: [{ url: "http://localhost:3000" }],
        supportedSubmitMethods: [],
    },
    apis: ["./routes/books.js"],
};
const swaggerSpecs = swaggerJsDoc(swaggerOptions);

const books = require("./routes/books");

app.use(express.json());

app.use(
    "/api-docs",
    swaggerUI.serve,
    swaggerUI.setup(swaggerSpecs, {
        customCss: ".swagger-ui.topbar, .swagger-ui .try-out {display: none}",
    })
);

app.use("/books", middlewareValidation, books);
app.use("/*", (request, response) => {
    response.status(404).send("Ruta no encontrada");
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
