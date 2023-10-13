/**
 * 3. Desarrolla una clase para alumnos que contenga las propiedades de nombre,
 * apellidos y puntos.
 * 4. En la clase anterior, añade un método “set” para establecer el valor de los
 * puntos y otro método “get” que devuelva el string “Apto” si los puntos son
 * iguales o superiores a 5 y “No apto” en caso contrario.
 * 5. Declara una función que, pasados 2 segundos, devuelva una promesa que
 * instancie a partir de los datos del formulario un objeto “alumn” y devuelva un
 * mensaje con su nombre, sus apellidos y si ha resultado apto o no. Para obtener
 * los valores del formulario, usa las siguientes líneas:
 * 6. Declara la función que es invocada desde el botón index.html con el nombre
 * “showUserResult()” de forma que implemente el patrón “async-await” e
 * invoque la función anterior para recibir el mensaje de la promesa e imprimirlo
 * por consola.
 * 7. Implementa en la función que devuelve la promesa la gestión de errores para
 * que, en caso de que el nombre, los apellidos o los puntos recibidos desde HTML
 * sean strings vacíos, devuelva un mensaje de error con el valor “Datos no
 * válidos”.
 * 8. Usa el patrón “async-await” con un “try-catch” para imprimir por consola el
 * error del paso anterior cuando se produzca.
 *
 * Creación de un proyecto HTML + JavaScript.
 * Creación de un sencillo formulario que recupere los datos de un alumno.
 * Creación de una clase para instanciar alumnos.
 * Creación de una función que devuelva una promesa con un objeto de alumno.
 * Creación de una función con el patrón "async-await" que invoque la anterior para ser disparada desde el formulario.
 * Consumo de la promesa en patrón "async-await".
 * Consumo de error en patrón "async-await".
 *
 * Clases ECMAScript 2015.
 * Instancias de objetos.
 * Función con retorno de promesa.
 * Función asíncrona con el patrón "async-await".
 * Uso de "resolve" en promesa.
 * Uso de "reject" en promesa.
 *
 * Desarrolla los pasos que habrá que seguir para definir todo el código de la manera que te planteamos en el PDF adjunto.
 */

function validateInputs(name, surname, points) {
    const hasValidName = !!name.trim();
    const hasValidSurname = !!surname.trim();

    // Convertir de 'string' a 'number'
    const pointsNumber = parseInt(points);
    const isValidPoints = pointsNumber >= 0 && pointsNumber <= 10; // asegurarse de que los puntos están entre 0 y 10 (por ejemplo '-1' no es un valor válido)

    return hasValidName && hasValidSurname && isValidPoints;
}

class Alumno {
    name;
    surname;
    points;

    constructor(name, surname, points) {
        this.name = name;
        this.surname = surname;
        this.points = points;
    }

    set(newPoints) {
        const nuevoValorDePuntosEsValido = validateInputs(this.name, this.surname, newPoints);
        if (nuevoValorDePuntosEsValido) {
            this.points = newPoints;
        } else {
            throw new Error("Nuevo valor de puntos no es válido");
        }
        return this;
    }

    get() {
        if (this.points >= 5) {
            return "Apto";
        } else {
            return "No apto";
        }
    }
}

function getUserResult(name, surname, points) {
    return new Promise((resolve, reject) => {
        const inputsSonValidos = validateInputs(name, surname, points);
        if (!inputsSonValidos) {
            reject("Datos no son válidos");
        }

        const alumnoClass = new Alumno(name, surname, points);
        const alumnoAptitud = alumnoClass.get();

        // esperar 2 segundos (2000ms)
        setTimeout(() => resolve(`${name} ${surname}: ${alumnoAptitud}`), 2000);
    });
}

async function showUserResult() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const points = document.getElementById("points").value;

    try {
        const userResults = await getUserResult(name, surname, points);
        console.log(userResults);
    } catch (error) {
        console.error(error);
    }
}
