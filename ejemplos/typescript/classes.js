var Persona = /** @class */ (function () {
    function Persona(n, a, e) {
        this.nombre = n;
        this.apellidos = a;
        this.edad = e;
    }
    return Persona;
}());
var Mascota = /** @class */ (function () {
    function Mascota(n, e) {
        this.nombre = n;
        this.especie = e;
    }
    return Mascota;
}());
function printName(a) {
    console.log(a.nombre);
}
var imanol = { nombre: "Imanol", apellidos: "Sanz Ruiz", edad: 23 };
var zarpas = { nombre: "Zarpas", especie: "Gato Azul Ruso" };
printName(imanol);
printName(zarpas);
