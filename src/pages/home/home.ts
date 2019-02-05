import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CategoriasPage } from '../categorias/categorias';
import { CredenciaisDTO } from '../../models/credenciais.dto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  }

  // injeção de dependências
  // basta declarar como parâmetro do construtor
  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  login(){
    this.navCtrl.setRoot('CategoriasPage')
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    console.log(this.creds);
    this.menu.swipeEnable(true);
  }
  
}
