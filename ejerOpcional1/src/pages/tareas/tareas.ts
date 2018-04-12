import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TareaService } from '../../services/tarea.service'
import { AlertController } from 'ionic-angular';
import { Tarea } from '../../models/tarea.model';
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
  selector: 'page-tareas',
  templateUrl: 'tareas.html',
})
export class TareasPage {
  public tareas$;
  constructor(public ts:TareaService, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {  	

  }

  promptEdit2(tar: Tarea){
  	console.log("Hemos entrado en promptEdit")
  	let alert = this.alertCtrl.create({

    title: 'Datos nuevos',
    inputs: [
      {
        name: 'evento',
        placeholder: 'Suicidio colectivo',
        value: tar.evento
      },
      {
        name: 'fecha',
        placeholder: 'Hoy',
        value: tar.fecha
      },
      {
      	name:"lugar",
      	placeholder:"Leganes cental",
        value: tar.lugar
      },
      {
      	name:"prioridad",
      	placeholder:"urgente",
        value: tar.prioridad

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
        	tar.edit(data.evento, data.fecha, data.lugar, data.prioridad);
         this.ts.edit(tar);
        }
      }
    ]
  });
  alert.present();
}


  promptOptions2(tar2: Tarea){
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
        	this.promptEdit2(tar2);
        }
      },
      {
        text: 'Eliminar',
        handler: data => {
        	this.ts.eliminar(tar2);
        }
      }
    ]
  });
  alert2.present();
  }

  scooby2(){
  	console.log("Hemos entrado en promptEdit")
  	let alert = this.alertCtrl.create({

    title: 'Nueva tarea',
    inputs: [
      {
        name: 'nombre',
        placeholder: 'Suicidio colectivo'
      },
      {
        name: 'fecha',
        placeholder: 'Hoy'
      },
      {
        name:"lugar",
        placeholder:"Leganes cental"
      },
      {
        name:"prioridad",
        placeholder:"urgente"
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
        	var tar = new Tarea(data.evento, data.fecha, data.luegar, data.prioridad, null);
        	this.ts.addTarea(tar);
        }
      }
    ]
  });
  alert.present();
  }

  ionViewWillEnter(){
    this.tareas$ = this.ts.getTareas().snapshotChanges()
    .map(
      (changes)=>{
        return changes.map(
          (c)=>{
            console.log(c.payload.key)
            return new Tarea(c.payload.val().evento,
              c.payload.val().fecha,
              c.payload.val().lugar,
              c.payload.val().prioridad,
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