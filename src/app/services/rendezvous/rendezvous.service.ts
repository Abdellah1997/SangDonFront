import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Centres } from 'src/app/models/Centre';
import { Rendezvous } from 'src/app/models/Rendezvous';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {

  
  API_URL = 'http://localhost:8000/api';

  constructor(private _httpClient: HttpClient) { }

  

  getCentres() :Observable<Centres[]>{
    return this._httpClient.get<Centres[]>(`${this.API_URL}`);
  }
  createRendezVous(rendezvous: Rendezvous):Observable<Object>{
    return this._httpClient.post(`${this.API_URL}`, rendezvous);
  }
}
