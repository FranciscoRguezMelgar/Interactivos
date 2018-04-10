import { Injectable } from "@angular/core";
import { Contact } from "../models/contact.model";
import { AngularFireDatabase } from "angularfire2/database"

@Injectable()
export class ContactService{
	private contacts: Contact;


	constructor(private db:AngularFireDatabase){
		this.contacts = this.db.list<Contact>('Interactivos')
		.getContacts()
		.snapshotChanges()
		.map();

	}

	addContact(value: Contact){
		this.contacts.push(value);
	}

	getContacts(){
		return this.contacts;
	}
	eliminar(con:Contact){
		var pos = this.contacts.indexOf(con);
		this.contacts.splice(pos, 1);
	}
}