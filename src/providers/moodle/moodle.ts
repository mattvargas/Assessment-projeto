import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoodleService {
  urlAPI = ' https://lms.infnet.edu.br/moodle/login/token.php';
  urlAPI2='https://lms.infnet.edu.br/moodle/webservice/rest/server.php'
  constructor(public web : HttpClient ) { }

  executaLogin(usuario, senha) {
    let formulario = new FormData();
    formulario.append('username', usuario,);
    formulario.append('password', senha);
    formulario.append('service', 'moodle_mobile_app')

    return this.web.post(this.urlAPI, formulario);
  }

  trazerDadosUsuario(token) {
    let formulario = new FormData();
    formulario.append('wstoken', token);
    formulario.append('moodlewsrestformat', 'json');
    formulario.append('wsfunction', 'core_webservice_get_site_info')

    return this.web.post(this.urlAPI2,formulario);
  }

  trazerMaterias(token, id){
    let formulario = new FormData();
    formulario.append('wstoken', token);
    formulario.append('moodlewsrestformat', 'json');
    formulario.append('wsfunction', 'core_enrol_get_users_courses')
    formulario.append('userid', id);

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
    return localStorage.getItem('token');
  }

  salvarID(dadosUsuario){
    return localStorage.setItem('usuario', dadosUsuario);
  }

  pegarID(){

    return localStorage.getItem('usuario')
  }

}
