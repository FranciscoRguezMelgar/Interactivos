import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	public data = {usuario:"", pass:""};
  constructor(private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
  	try{
  		  	const result = this.afAuth.auth.signInWithEmailAndPassword(this.data.usuario, this.data.pass);
  		  	if(result){
  		  		this.navCtrl.setRoot(HomePage);
  			}
  	}catch(e){
  		console.log("Error en el login, excepción."+JSON.stringify(e))
  	}
  }
  create(){
  	try{
  		  	const result = this.afAuth.auth.createUserWithEmailAndPassword(this.data.usuario, this.data.pass);
  		  	if(result){
  		  		this.navCtrl.setRoot(HomePage);
  			}
  	}catch(e){
  		console.log("Error en el create, excepción.")
  		console.log(e)
  	}
  }

}
