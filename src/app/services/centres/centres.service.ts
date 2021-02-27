import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Centre } from 'src/app/models/Centre';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CentresService {
  API_URL = 'http://localhost:8000/api/';
  token: any;

  public centtres : (Centre)[] = [];
  constructor(private http: HttpClient, private loginService: LoginService) { }



  getCentres(){
    this.token = this.loginService.token
    console.log("DEMANEDE TOKEN : "+this.token)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    console.log(this.API_URL+ `centres`)
    console.log(this.token)
    return this.http.get<Centre[]>(this.API_URL+ `centres`, { headers: headers });
  }

  getCenterByID(id){

    this.token = this.loginService.token
    console.log("DEMANEDE TOKEN : "+this.token)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<Centre[]>(this.API_URL+ `centre/${id}`, { headers: headers });

  }
}
