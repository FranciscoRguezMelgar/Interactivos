export class Contact{
	key?: string;
	nombre: string;
	organizacion: string;
	movil: string;
	correo: string;
	edit(nombre:string, org:string, movil:string, mail:string){
		this.correo = mail;
		this.organizacion = org;
		this.nombre = nombre;
		this.movil = movil;
		return;
	}
	constructor(nombre:string, org:string, movil:string, mail:string){
		this.correo = mail;
		this.organizacion = org;
		this.nombre = nombre;
		this.movil = movil;
		return;
	}
}