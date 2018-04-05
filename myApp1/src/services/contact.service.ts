import { Contact } from "../models/contact.model";
export class ContactService{
	private contacts: Contact []=
	[new Contact("Rodrigo","CruzadasCastilla","123456789","elcid@gmail.com")]

	constructor(){

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