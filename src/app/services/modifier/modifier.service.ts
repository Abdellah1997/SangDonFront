import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ville } from 'src/app/models/Ville';
import {LoginService} from '../login/login.service'

@Injectable({
  providedIn: 'root'
})
export class ModifierService {

  API_URL = 'http://localhost:8000/api/';

  constructor(private http:HttpClient, private loginService: LoginService) { }

  edit(name: String, date_naissance: Date, ville_id: String, sexe: String, email: String, password: String) {
    
    return this.http.post(this.API_URL + `user/${this.loginService.user.id}`,
      {name: name, date_naissance: date_naissance, ville_id: ville_id, sexe: sexe, email: email, password: password, type_sang_id: 1}
    )
  }

  getVilles(){
    return this.http.get<Ville[]>(this.API_URL+"villes");
  }
}
