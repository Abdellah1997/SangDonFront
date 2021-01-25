import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ville } from 'src/app/models/Ville';
import {LoginService} from '../login/login.service'

@Injectable({
  providedIn: 'root'
})
export class ModifierService {

  API_URL = 'http://localhost:8000/api/';

  constructor(private http:HttpClient) { }

  edit(name: String, date_ns: Date, ville: String, genre: String, email: String, password: String) {
    
    return this.http.post(this.API_URL + 'edit',
      {id: LoginService.user.id, name: name, date_ns: date_ns, ville: ville, genre: genre, email: email, password: password}
    )
  }

  getVilles(){
    return this.http.get<Ville[]>(this.API_URL+"villes");
  }
}
