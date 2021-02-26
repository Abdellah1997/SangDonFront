import { Centre } from './../../models/Centre';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Demande } from 'src/app/models/Demande';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  
  API_URL = 'http://localhost:8000/api/';
  token: any;

  public centtres : (Centre)[] = [];
  constructor(private http: HttpClient, private loginService: LoginService) { }

  getCentres(ville_id){
    this.token = this.loginService.token
    console.log("DEMANEDE TOKEN : "+this.token)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    console.log(this.API_URL+ `centre/${ville_id}`)
    console.log(this.token)
    return this.http.get<Centre[]>(this.API_URL+ `centre/${ville_id}`, { headers: headers });
  }


  add(demande) {
    
    this.token = this.loginService.token
    console.log("DEMANEDE TOKEN : "+this.token)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    console.log("VILLE : "+demande)

    return this.http.post<Demande>(this.API_URL + 'demande', demande, { headers: headers });
  }
}
