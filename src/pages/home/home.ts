import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { CategoriasPage } from '../categorias/categorias';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // injeção de dependências
  // basta declarar como parâmetro do construtor
  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.setRoot('CategoriasPage')
  }
}
