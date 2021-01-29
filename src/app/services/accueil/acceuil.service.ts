import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ville } from 'src/app/models/Ville';
import {LoginService} from '../login/login.service'
import { Demande } from 'src/app/models/Demande';
@Injectable({
  providedIn: 'root'
})
export class AcceuilService {
   id_d=-1;
  constructor(private http:HttpClient) { }
  API_URL = 'http://localhost:8000/api/';
  getdemandes() {
    var str: string = String(LoginService.user.ville);
    const headers=new HttpHeaders().set("ville",str);
    return this.http.get<Demande[]>(this.API_URL + 'demandes',{headers,responseType: 'text' as 'json'});
  }
  appliquer(id_d)
  {
    return this.http.post(this.API_URL+ 'appliquer',{id:LoginService.user.id,id_demande:id_d});
  }
}
