import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  API_URL = 'http://localhost:8000/api/';
  // password = "";
  token: any

  constructor(private http:HttpClient, private loginService:LoginService) { }

  delete(password) {
    this.token = this.loginService.token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'password' : `${password}`
    });

    return this.http.delete(this.API_URL + `user`, {headers: headers })
  }

  // public getPassword(password){

  //   return this.http.post(this.API_URL + 'getPassword',{id: LoginService.user.id, }).pipe(
  //     tap(
  //       data =>{
          
  //           this.password= data['password'];
  //     },
  //       error =>console.log(error)
  //     )
  //   )
  // }

  

}
