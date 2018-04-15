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

            userid:any;
            materia: any;
            id : any;
            chamada2 :any;
            nome:any;
            chmat:any;
            toklocal:any


            constructor(public navCtrl: NavController, public navParams: NavParams,
                        public web: HttpClient, public service: MoodleService ) {

              this.toklocal= this.navParams.get("token");



              this.trazerUsuario();

              let chm = this.service.pegarID().subscribe(ret=> {
                this.userid = JSON.parse(ret).userid;
              });

            }





              trazerUsuario(){
              this.service.trazerDadosUsuario(this.toklocal)
                .subscribe(data =>{
                  this.chamada = JSON.stringify(data);
                  this.service.salvarID(this.chamada).subscribe(ret =>{ret})});
              }


            voltarPage() {
              this.navCtrl.pop();
            }
          }

          /* trazerMateria(){
         this.service.trazerMaterias(this.token,this.userid).subscribe(data =>{
           this.chmat =JSON.stringify(data)
           this.service.criarMaterias(this.chmat);

         });

     }*/
          //let x = this.trazerUsuario();

          //let chamada2 = this.service.pegarID();
          // console.log(this.userid);
          /* let chmat= this.service.pegarMaterias();
      this.id=JSON.parse(chmat).id;
     console.log(this.id);
     let chmat = this.service.pegarMaterias();
        this.materia=JSON.parse(chmat).fullName; */
