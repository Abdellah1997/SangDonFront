import { LoginService } from 'src/app/services/login/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  API_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  reset(data){
    return this.http.post(`${this.API_URL}/change-password`,data);
  }
}
