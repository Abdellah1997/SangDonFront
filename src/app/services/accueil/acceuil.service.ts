import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginService} from '../login/login.service'
@Injectable({
  providedIn: 'root'
})
export class AcceuilService {
  constructor(private http:HttpClient,private loginService: LoginService) { }
  API_URL = 'http://127.0.0.1:8000/api/';
  token : any
  getdemandes() {
    this.token = this.loginService.token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<any>(this.API_URL + 'demandes',{ headers: headers });
  }
  appliquer(adresse)
  {
    this.token = this.loginService.token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    let rd = {
      "id_user":this.loginService.user.id,
      "adresse":adresse
    }
    return this.http.post(this.API_URL+ 'dons',rd, { headers: headers });
  }
}
