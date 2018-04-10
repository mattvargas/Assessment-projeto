import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoodleService {
  urlAPI = ' https://lms.infnet.edu.br/moodle/login/token.php';
  urlAPI2='https://lms.infnet.edu.br/moodle/webservice/rest/server.php?wstoken=${this.wstoken}&moodlewsrestformat=json&wsfunction=core_webservice_get_site_info'

  constructor(public web : HttpClient ) {

  }

  executaLogin(usuario, senha) {
    let formulario = new FormData();
    formulario.append('username', usuario,);
    formulario.append('password', senha);
    formulario.append('service', 'moodle_mobile_app')

    return this.web.post(this.urlAPI, formulario);


  }
   getID(token){
     let formulario = new FormData();
     formulario.append('wstoken', token,);
     formulario.append('moodlewsrestformat', 'json');
     formulario.append('wsfunction', 'core_webservice_get_site_info');
   }

  listarMaterias(token,ID){
    let formulario = new FormData();
    formulario.append('wstoken',token);
    formulario.append('moodlewsrestformat','json');
    formulario.append('wsfunction','core_enrol_get_users_courses')
    formulario.append('userid', ID);
  }




  retornaListaUsuarios(){
    return this.web.get(this.urlAPI + '/login' , {

    })
  }



  verificarToken(){
    if (localStorage.getItem('token')){
      return true
    }
    return false
  }
  salvaToken(token){
    localStorage.setItem('token', token);
  }

  retornaToken(){
    return localStorage.getiItem('token');
  }

  estalogado(token): boolean{

    let user = localStorage.getItem(token);
    return! (user===null)

  }

  logout(){
    localStorage.removeItem("token")

  }
}

