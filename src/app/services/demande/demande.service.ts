import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Demande } from 'src/app/models/Demande';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  static ngInjectableDef = undefined;
  API_URL = 'http://localhost:8000/api/demande';
  token: any;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  add(demande) {

    this.token = this.loginService.token
    console.log("DEMANEDE TOKEN : "+this.token)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    console.log("VILLE : "+demande)

    return this.http.post<Demande>(this.API_URL, demande, { headers: headers });
  }
}
