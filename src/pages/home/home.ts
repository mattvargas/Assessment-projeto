import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MoodleService} from "../../providers/moodle/moodle";
import {HttpClient} from "@angular/common/http";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    usuario : any
    senha : any
    tok : any
  param1:any
  constructor(public navCtrl: NavController, public navParams : NavParams,
              public service : MoodleService, public web : HttpClient,) {

  }
  logarApi(){
    this.service.executaLogin(this.usuario,this.senha)
      .subscribe(data => {
        this.tok = JSON.stringify(data);
        this.service.salvaToken(this.tok);
        this.navCtrl.push(LoginPage);
      });

  }
}
