import { Injectable } from "@angular/core";
import { Contact } from "../models/contact.model";
import { AngularFireDatabase } from "angularfire2/database"
import { AngularFireList } from "angularfire2/database"
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService{
	public contactsRef$ : AngularFireList<Contact>;

	constructor(private myDb: AngularFireDatabase){
		this.contactsRef$ = myDb.list<Contact>('/contacts');
		console.log("Contruido el servicio de contactos")
	}

	addContact(value: Contact){
		this.contactsRef$.push(value);
	}

	getContacts(){
		console.log("Me han pedido contactos")
		//console.log(this.contactsRef$.valueChanges())		
		return this.contactsRef$;
	}
	eliminar(con:Contact){
		var pos = this.contactsRef$.remove(con.key);
		
	}
	edit(con:Contact){
		this.contactsRef$.update(con.key, con);
	}

}