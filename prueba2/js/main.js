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
 * Clases ECMAScript 2015.
 * Instancias de objetos.
 * Función con retorno de promesa.
 * Función asíncrona con el patrón "async-await".
 * Uso de "resolve" en promesa.
 * Uso de "reject" en promesa.
 */

let name = document.getElementById("name").value;
let surname = document.getElementById("surname").value;
let points = document.getElementById("points").value;

class Alumno {
    
}

async function showUserResult() {
    new Alumno({})
}
