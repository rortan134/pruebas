/**
 * Para comprender el uso de TypeScript en proyectos JavaScript y afianzar los conceptos de tipado estático y programación orientada a objetos de este superset, deberás llevar a cabo los siguientes pasos:
 *
 * Creación de un proyecto HTML + TypeScript/JavaScript de gestión de recursos humanos.
 * Creación de un sencillo formulario que recupere los datos de un empleado con rol del departamento de ventas.
 * Creación de una interfaz TypeScript de empleados.
 * Creación de una clase TypeScript de empleados de ventas.
 * Creación de un objeto para recibir los datos del formulario de la clase de empleados de ventas.
 * Técnicamente, las líneas de código y ejecución del programa deben usar:
 *
 * Tipado estático con primitivos
 * Tipado estático con clases globales JavaScript
 * Interfaz TypeScript
 * Clase TypeScript
 * Objeto de la clase
 * Transpilación del código TypeScript a JavaScript
 *
 * 3. Desarrolla una interfaz TypeScript para empleados que contenga las
 * propiedades de nombre, apellidos, correo electrónico y fecha de nacimiento
 * con sus correspondientes tipos.
 * 4. Desarrolla una clase TypeScript que implemente la interfaz anterior y además
 * contenga las propiedades específicas para empleados de ventas “Unidad de
 * venta” y “Zona geográfica”.
 * 5. Añade a la clase anterior el método constructor y los métodos “get” y “set” de
 * las propiedades.
 * 6. Declara la función que es invocada desde el botón index.html con el nombre
 * “addEmployee()” para que instancie un objeto de la clase “empleado de ventas”
 * declarada anteriormente, inicializándolo con los valores del formulario y, en la
 * misma función, emplea los métodos de la clase para imprimir por consola sus
 * valores.
 * Transpila el código a JavaScript y comprueba su funcionamiento en la consola
 * de las herramientas de desarrollador.
 */

interface EmpleadoProps {
    employeeName: string;
    surname: string;
    email: string;
    birthDate: Date;
}

abstract class Empleado implements EmpleadoProps {
    employeeName: string;
    surname: string;
    email: string;
    birthDate: Date;

    constructor({ employeeName, surname, email, birthDate }: EmpleadoProps) {
        this.employeeName = employeeName;
        this.surname = surname;
        this.email = email;
        this.birthDate = birthDate;
    }

    getEmployeeName(): string {
        return this.employeeName;
    }
    setEmployeeName(employeeName: string) {
        this.employeeName = employeeName;
    }
    getSurname(): string {
        return this.surname;
    }
    setSurname(surname: string) {
        this.surname = surname;
    }
    getEmail(): string {
        return this.email;
    }
    setEmail(email: string) {
        this.email = email;
    }
    getBirthDate(): Date {
        return this.birthDate;
    }
    setBirthDate(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

interface EmpleadoDeVentasProps extends EmpleadoProps {
    sdUnit: string;
    area: string;
}

class EmpleadoDeVentas extends Empleado implements EmpleadoDeVentasProps {
    sdUnit: string;
    area: string;

    constructor({ employeeName, surname, email, birthDate, sdUnit, area }: EmpleadoDeVentasProps) {
        super({ employeeName, surname, email, birthDate });
        this.sdUnit = sdUnit;
        this.area = area;
    }

    getSdUnit(): string {
        return this.sdUnit;
    }
    setSdUnit(sdUnit: string) {
        this.sdUnit = sdUnit;
    }
    getArea(): string {
        return this.area;
    }
    setArea(area: string) {
        this.area = area;
    }
}

function addEmployee() {
    let employeeName = (<HTMLInputElement>document.getElementById("name")).value;
    let surname = (<HTMLInputElement>document.getElementById("surname")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let birthDateValue = (<HTMLInputElement>document.getElementById("birthDate")).value;
    let sdUnit = (<HTMLInputElement>document.getElementById("sdUnit")).value;
    let area = (<HTMLInputElement>document.getElementById("area")).value;

    if (!employeeName || !surname || !email || !birthDateValue || !sdUnit || !area) {
        throw new Error("Faltan datos");
    }

    // Convertir 'string' a 'Date' a partir del input type="date"
    const birthDate = new Date(birthDateValue);

    const nuevoEmpleado = new EmpleadoDeVentas({
        employeeName,
        surname,
        email,
        birthDate,
        sdUnit,
        area,
    });

    console.log(nuevoEmpleado);
}
