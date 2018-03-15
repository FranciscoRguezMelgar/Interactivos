
class Persona{
	public nombre:string
	public apellidos:string
	public edad:number
	constructor(n:string, a:string, e:number){
		this.nombre = n;
		this.apellidos = a;
		this.edad =e;
	}
}

class Mascota{
	public nombre:string
	public especie:string
	constructor(n:string, e:string){
		this.nombre = n;
		this.especie =e;
	}
}
//Pese a no decirlo expresamente (con implements), las dos clases anteriores cumplen esta interfaz
// porque cumples los requisitos (tener un atributo llamado nombre de tipo string)
interface tieneNombre{
	nombre:String
}
function printName(a:tieneNombre){
	console.log(a.nombre);
}
//instanciamos los objetos
let imanol:Persona = {nombre:"Imanol", apellidos:"Sanz Ruiz", edad:23}
let zarpas:Mascota = {nombre:"Zarpas", especie:"Gato Azul Ruso"}
//vemos como ambas llamadas funcionan
printName(imanol)
printName(zarpas)