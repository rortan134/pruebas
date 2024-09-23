const alumnos = [
    { nombre: "Juan", apellido: "Perez" },
    { nombre: "Maria", apellido: "Lopez" },
    { nombre: "Pedro", apellido: "Gomez" },
];

function getAlumnos(apellido) {
    const coincidencias = alumnos.find(
        (alumno) => alumno.apellido.toLowerCase() === apellido.toLowerCase()
    );
    return coincidencias;
}

module.exports = { alumnos, getAlumnos };
