// Validación de campos de la entidad libro para las propiedades de título, autor, editorial y identificador
function validateRequest(request, response, next) {
    // No hace falta validar peticiones GET o DELETE ya que no tienen `body`
    if (request.method === "PUT" || request.method === "POST") {
        const bookDatos = request.body;
        if (
            !bookDatos ||
            !bookDatos.id ||
            !bookDatos.titulo ||
            !bookDatos.autor ||
            !bookDatos.editorial
        ) {
            response.status(400).send("Faltan campos obligatorios");
            return;
        }
    }

    next();
}

module.exports = validateRequest;
