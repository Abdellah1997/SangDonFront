import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Demande } from 'src/app/models/Demande';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {
  
  API_URL = 'http://localhost:8000/api/demandes';

  constructor(private _httpClient: HttpClient) { }
  getDemandes(): Observable<Demande[]>{
    return this._httpClient.get<Demande[]>(`${this.API_URL}`);
  }
  Delete(id:number):Observable<Object>{
    return this._httpClient.delete(`${this.API_URL}/${id}`)
  }

 
}


  

