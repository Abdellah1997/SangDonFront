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
  password = "";
  constructor(private http:HttpClient) { }

  delete(password) {
    return this.http.post(this.API_URL + 'delete',
      {id: LoginService.user.id, password: password}
    )
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
