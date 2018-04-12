import { Injectable } from "@angular/core";
import { Tarea } from "../models/tarea.model";
import { AngularFireDatabase } from "angularfire2/database"
import { AngularFireList } from "angularfire2/database"
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TareaService{
	public tareasRef$ : AngularFireList<Tarea>;

	constructor(private myDb: AngularFireDatabase){
		this.tareasRef$ = myDb.list<Tarea>('/tareas');
		console.log("Contruido el servicio de tareas")
	}

	addTarea(value: Tarea){
		this.tareasRef$.push(value);
	}

	getTareas(){
		console.log("Me han pedido tareas")
		//console.log(this.tareasRef$.valueChanges())		
		return this.tareasRef$;
	}
	eliminar(con:Tarea){
		var pos = this.tareasRef$.remove(con.key);
		
	}
	edit(con:Tarea){
		this.tareasRef$.update(con.key, con);
	}

}