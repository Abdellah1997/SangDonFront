import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Demandes } from 'src/app/models/Demandes';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {
  
  API_URL = "https://jsonplaceholder.typicode.com";

  constructor(private _httpClient: HttpClient) { }
  getDemandes(): Observable<Demandes[]>{
    return this._httpClient.get<Demandes[]>(`${this.API_URL}`);
  }
  Delete(id:number):Observable<Object>{
    return this._httpClient.delete(`${this.API_URL}/${id}`)
  }

 
}


  

