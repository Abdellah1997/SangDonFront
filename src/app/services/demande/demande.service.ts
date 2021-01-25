import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Demande } from 'src/app/models/Demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  static ngInjectableDef = undefined;
  API_URL = 'http://localhost:8000/demandes';

  constructor(private http: HttpClient) { }

  add(demande) {
    return this.http.post<Demande>(this.API_URL, demande);
  }
}
