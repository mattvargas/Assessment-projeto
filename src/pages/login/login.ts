import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {MoodleService} from "../../providers/moodle/moodle";
import {ListPage} from "../list/list";

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


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public web: HttpClient, public service: MoodleService) {

    this.service.getID(this.navParams.data);
  }



listarMaterias(){

    this.listarMaterias();
}



  voltarPage() {
    this.navCtrl.pop();

  }
}
