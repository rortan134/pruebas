var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Empleado = /** @class */ (function () {
    function Empleado(_a) {
        var employeeName = _a.employeeName, surname = _a.surname, email = _a.email, birthDate = _a.birthDate;
        this.employeeName = employeeName;
        this.surname = surname;
        this.email = email;
        this.birthDate = birthDate;
    }
    Empleado.prototype.getEmployeeName = function () {
        return this.employeeName;
    };
    Empleado.prototype.setEmployeeName = function (employeeName) {
        this.employeeName = employeeName;
    };
    Empleado.prototype.getSurname = function () {
        return this.surname;
    };
    Empleado.prototype.setSurname = function (surname) {
        this.surname = surname;
    };
    Empleado.prototype.getEmail = function () {
        return this.email;
    };
    Empleado.prototype.setEmail = function (email) {
        this.email = email;
    };
    Empleado.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    Empleado.prototype.setBirthDate = function (birthDate) {
        this.birthDate = birthDate;
    };
    return Empleado;
}());
var EmpleadoDeVentas = /** @class */ (function (_super) {
    __extends(EmpleadoDeVentas, _super);
    function EmpleadoDeVentas(_a) {
        var employeeName = _a.employeeName, surname = _a.surname, email = _a.email, birthDate = _a.birthDate, sdUnit = _a.sdUnit, area = _a.area;
        var _this = _super.call(this, { employeeName: employeeName, surname: surname, email: email, birthDate: birthDate }) || this;
        _this.sdUnit = sdUnit;
        _this.area = area;
        return _this;
    }
    EmpleadoDeVentas.prototype.getSdUnit = function () {
        return this.sdUnit;
    };
    EmpleadoDeVentas.prototype.setSdUnit = function (sdUnit) {
        this.sdUnit = sdUnit;
    };
    EmpleadoDeVentas.prototype.getArea = function () {
        return this.area;
    };
    EmpleadoDeVentas.prototype.setArea = function (area) {
        this.area = area;
    };
    return EmpleadoDeVentas;
}(Empleado));
function addEmployee() {
    var employeeName = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var birthDateValue = document.getElementById("birthDate").value;
    var sdUnit = document.getElementById("sdUnit").value;
    var area = document.getElementById("area").value;
    if (!employeeName || !surname || !email || !birthDateValue || !sdUnit || !area) {
        throw new Error("Faltan datos");
    }
    // Convertir 'string' a 'Date' a partir del input type="date"
    var birthDate = new Date(birthDateValue);
    var nuevoEmpleado = new EmpleadoDeVentas({
        employeeName: employeeName,
        surname: surname,
        email: email,
        birthDate: birthDate,
        sdUnit: sdUnit,
        area: area,
    });
    console.log(nuevoEmpleado);
}
