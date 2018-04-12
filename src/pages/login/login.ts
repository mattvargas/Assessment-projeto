    import { Component } from '@angular/core';
    import { IonicPage, NavController, NavParams } from 'ionic-angular';
    import {HttpClient} from "@angular/common/http";
    import {MoodleService} from "../../providers/moodle/moodle";


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

      token: any;
      chamada : any;
      userid:any
      materia: any
      id : any
      nome:any



      constructor(public navCtrl: NavController, public navParams: NavParams,
                  public web: HttpClient, public service: MoodleService) {


        let chamada = this.service.retornaToken();
        this.token = JSON.parse(chamada).token;
        console.log(this.token);
        this.trazerUsuario();
        let chamada2 = this.service.pegarID()
        this.userid = JSON.parse(chamada2).userid;
         this.nome = JSON.parse(chamada2).fullname
        console.log(this.userid);
        this.trazerMateria();
        console.log(this.trazerMateria());

      }

      trazerUsuario(){
        this.service.trazerDadosUsuario(this.token)
          .subscribe(data =>{
            this.chamada = JSON.stringify(data),
            this.service.salvarID(this.chamada);
          });

      }
      trazerMateria(){

      }


      voltarPage() {
        this.navCtrl.pop();

      }


    }


