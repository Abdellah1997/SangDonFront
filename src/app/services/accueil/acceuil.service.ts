import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginService} from '../login/login.service'
@Injectable({
  providedIn: 'root'
})
export class AcceuilService {
  constructor(private http:HttpClient,private loginService: LoginService) { }
  API_URL = 'http://127.0.0.1:8000/api/';
  token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9yZWdpc3RlciIsImlhdCI6MTYxNDM4MDA4MCwiZXhwIjoxNjE0MzgzNjgwLCJuYmYiOjE2MTQzODAwODAsImp0aSI6IjJKYXV3anRicGNaZExBY1IiLCJzdWIiOjYsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.8At4fZy8luCau1X_9QVA437PwK_gH4LIg2fpUp-8kXQ';
  getdemandes() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<any>(this.API_URL + 'demandes',{ headers: headers });
  }
  appliquer(adresse)
  {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    let rd = {
      "id_user":1,
      "adresse":adresse
    }
    return this.http.post(this.API_URL+ 'dons',rd, { headers: headers });
  }
}
