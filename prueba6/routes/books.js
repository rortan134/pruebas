const express = require("express");
const app = express();

/**
 * @swagger
 * tags:
 *  name: Books
 *  description: API REST - Books
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - id
 *         - titulo
 *         - autor
 *         - editorial
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único del libro
 *         titulo:
 *           type: string
 *           description: Título del libro
 *         autor:
 *           type: string
 *           description: Autor del libro
 *         editorial:
 *           type: string
 *           description: Editorial del libro
 */

const books = [
    {
        id: 1,
        titulo: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
        editorial: "Minotauro",
    },
    {
        id: 2,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        editorial: "Sudamericana",
    },
    {
        id: 3,
        titulo: "La Odisea",
        autor: "Homero",
        editorial: "Gredos",
    },
    {
        id: 4,
        titulo: "La Iliada",
        autor: "Homero",
        editorial: "Gredos",
    },
    {
        id: 5,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        editorial: "Alfaguara",
    },
];

/**
 * @swagger
 * /books:
 *  get:
 *      summary: Devuelve todos los libros
 *      tags: [Books]
 *      produces:
 *         - application/json
 *      responses:
 *          200:
 *              description: Lista de libros
 *          404:
 *           description: No se encontraron libros
 *          500:
 *           description: Error interno
 */
app.get("/", (request, response) => {
    response.status(200).json(books);
});

/**
 * @swagger
 * /books/{id}:
 *  get:
 *      summary: Devuelve un libro por su id
 *      tags: [Books]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Id del libro
 *      produces:
 *         - application/json
 *      responses:
 *          200:
 *              description: Lista de libros
 *          404:
 *           description: No se encontraron libros
 *          500:
 *           description: Error interno
 */
app.get("/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const bookDatos = books.find((book) => book.id === id);
    if (bookDatos) {
        response.status(200).json(bookDatos);
    } else {
        response.status(404).send("Libro no encontrado");
    }
});

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Actualiza un libro por su id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id del libro
 *       - in: body
 *         name: book
 *         description: Datos del libro
 *         schema:
 *           type: object
 *           required:
 *             - id
 *             - titulo
 *             - autor
 *             - editorial
 *           properties:
 *             id:
 *               type: integer
 *             titulo:
 *               type: string
 *             autor:
 *               type: string
 *             editorial:
 *               type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Libro actualizado
 *       404:
 *         description: No se encontró el libro
 *       500:
 *         description: Error interno
 */
app.put("/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const bookDatos = books.find((book) => book.id === id);
    if (bookDatos) {
        // reemplazar datos
        bookDatos.titulo = request.body.titulo;
        bookDatos.autor = request.body.autor;
        bookDatos.editorial = request.body.editorial;
        response.status(200).json(bookDatos);
    } else {
        response.status(404).send("Libro no encontrado");
    }
});

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Crea un nuevo libro
 *     tags: [Books]
 *     parameters:
 *       - in: body
 *         name: book
 *         description: Datos del libro
 *         schema:
 *           type: object
 *           required:
 *             - id
 *             - titulo
 *             - autor
 *             - editorial
 *           properties:
 *             id:
 *               type: integer
 *             titulo:
 *               type: string
 *             autor:
 *               type: string
 *             editorial:
 *               type: string
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: Libro creado con éxito
 *       500:
 *         description: Error interno
 */
app.post("/", (request, response) => {
    const bookDatos = {
        id: books.length + 1,
        titulo: request.body.titulo,
        autor: request.body.autor,
        editorial: request.body.editorial,
    };
    books.push(bookDatos);
    response.status(201).json(bookDatos); // status 201: creado con éxito
});

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Elimina un libro por su id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id del libro
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Libro eliminado
 *       404:
 *         description: No se encontró el libro
 *       500:
 *         description: Error interno
 */
app.delete("/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const bookDatos = books.find((book) => book.id === id);
    if (bookDatos) {
        books.splice(books.indexOf(bookDatos), 1);
        response.status(200).json(bookDatos);
    } else {
        response.status(404).send("Libro no encontrado");
    }
});

module.exports = app;
