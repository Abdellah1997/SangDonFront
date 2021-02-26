import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ville } from 'src/app/models/Ville';
import {LoginService} from '../login/login.service'
import { Demande } from 'src/app/models/Demande';
@Injectable({
  providedIn: 'root'
})
export class AcceuilService {
  constructor(private http:HttpClient) { }
  API_URL = 'http://127.0.0.1:8000/api/';
  token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9yZWdpc3RlciIsImlhdCI6MTYxNDM3NjM3NCwiZXhwIjoxNjE0Mzc5OTc0LCJuYmYiOjE2MTQzNzYzNzQsImp0aSI6IjFKeVNxbmxEM2xOaDR2SGkiLCJzdWIiOjUsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.914TftrczEWJ7J-Ac4CFihRThMFuu2pBpfnQrP-zWHo';
  getdemandes() {
    return this.http.get<any>(this.API_URL + 'demandes?token='+this.token);
  }
  appliquer(id_d,adresse)
  {
    let rd = {
      "token" :this.token,
      "id_user":1,
      "adresse":"test test test"
    }
    return this.http.post(this.API_URL+ 'dons',rd);
  }
}
