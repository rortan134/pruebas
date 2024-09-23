function hasNumber(valor) {
    return /\d/.test(valor);
}

function validateRequest(request, response, next) {
    if (!request.params.apellido || hasNumber(request.params.apellido)) {
        response.status(400).send("Valor de apellido inválido (no puede contener números)");
    }
    next();
}

module.exports = validateRequest;
