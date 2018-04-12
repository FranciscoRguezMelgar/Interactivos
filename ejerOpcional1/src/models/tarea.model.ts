export class Tarea{
	key?: string;
	evento: string;
	fecha: string;
	lugar: string;
	prioridad: string;
	edit(evento:string, fecha:string, lugar:string, prioridad:string){
		this.prioridad = prioridad;
		this.fecha = fecha;
		this.evento = evento;
		this.lugar = lugar;
		return;
	}

	constructor(evento:string, fecha:string, lugar:string, prioridad:string, key:string){
		this.prioridad = prioridad;
		this.fecha = fecha;
		this.evento = evento;
		this.lugar = lugar;
		this.key = key;
		return;
	}
}