import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contact.service'
import { AlertController } from 'ionic-angular';
import { Contact } from '../../models/contact.model';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
cs: ContactService;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  	this.cs = new ContactService();

  }

  promptEdit(con: Contact){
  	console.log("Hemos entrado en promptEdit")
  	let alert = this.alertCtrl.create({

    title: 'Datos nuevos',
    inputs: [
      {
        name: 'nombre',
        placeholder: 'Adrián',
        value: con.nombre
      },
      {
        name: 'organizacion',
        placeholder: 'Corona de Aragón',
        value: con.organizacion
      },
      {
      	name:"movil",
      	placeholder:"666666666",
      	type:"Phone",
        value: con.movil
      },
      {
      	name:"correo",
      	placeholder:"pepe.pepe@españa.es",
      	type:"email",
        value: con.correo

      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Guardar',
        handler: data => {
        	con.edit(data.nombre, data.organizacion, data.movil, data.correo);
        }
      }
    ]
  });
  alert.present();
}


  promptOptions(con2: Contact){
  	let alert2 = this.alertCtrl.create({

    title: 'Acciones',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Editar',
        handler: data => {
        	this.promptEdit(con2);
        }
      },
      {
        text: 'Eliminar',
        handler: data => {
        	this.cs.eliminar(con2);
        }
      }
    ]
  });
  alert2.present();
  }

  scooby(){
  	console.log("Hemos entrado en promptEdit")
  	let alert = this.alertCtrl.create({

    title: 'Nuevo contacto',
    inputs: [
      {
        name: 'nombre',
        placeholder: 'Adrián'
      },
      {
        name: 'organizacion',
        placeholder: 'Corona de Aragón'
      },
      {
      	name:"movil",
      	placeholder:"666666666",
      	type:"Phone"
      },
      {
      	name:"correo",
      	placeholder:"pepe.pepe@españa.es",
      	type:"email"

      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Guardar',
        handler: data => {
        	var con = new Contact(data.nombre, data.organizacion, data.movil, data.correo);
        	this.cs.addContact(con);
        }
      }
    ]
  });
  alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

}
