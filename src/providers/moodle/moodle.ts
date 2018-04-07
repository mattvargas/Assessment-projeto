import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoodleService {
  urlAPI = ' https://lms.infnet.edu.br/moodle/login/token.php';

  constructor(public web : HttpClient ) { }

  executaLogin(usuario, senha) {
    let formulario = new FormData();
    formulario.append('username', usuario,);
    formulario.append('password', senha);
    formulario.append('service', 'moodle_mobile_app')

    return this.web.post(this.urlAPI, formulario);


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
}
