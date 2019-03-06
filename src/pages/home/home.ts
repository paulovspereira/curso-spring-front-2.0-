import { Component } from '@angular/core';
import { NavController , IonicPage, MenuController} from 'ionic-angular';
import { CategoriasPage } from '../categorias/categorias';
import { CredenciaisDTO } from '../../models/credenciais.dto';
//import { CategoriasPage } from '../categorias/categorias'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login(){
    console.log(this.creds);
    this.navCtrl.push(CategoriasPage.name);
  }
}
