import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contact.service'
import { AlertController } from 'ionic-angular';
import { Contact } from '../../models/contact.model';
import { AngularFireDatabase } from "angularfire2/database"
import { Observable } from 'rxjs/Observable';

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
  public contacts$;
  constructor(public cs:ContactService, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {  	

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
         this.cs.edit(con);
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
        	var con = new Contact(data.nombre, data.organizacion, data.movil, data.correo, null);
        	this.cs.addContact(con);
        }
      }
    ]
  });
  alert.present();
  }

  ionViewWillEnter(){
    this.contacts$ = this.cs.getContacts().snapshotChanges()
    .map(
      (changes)=>{
        return changes.map(
          (c)=>{
            console.log(c.payload.key)
            return new Contact(c.payload.val().nombre,
              c.payload.val().organizacion,
              c.payload.val().movil,
              c.payload.val().correo,
              c.payload.key
              )
          }
          )
      }
    );

}
}

/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

  ionViewWillEnter(){

   //this.contacts=this.ContactService.getContacts();
   this.contacts$ = this.ContactService
     .getContacts()  //Retorna la DB
     .snapshotChanges() //retorna los cambios en la DB (key and value)
     .map(changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       }); 
    
}*/