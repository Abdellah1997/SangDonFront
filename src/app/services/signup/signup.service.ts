import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Ville } from 'src/app/models/Ville';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  API_URL = 'http://localhost:8000/api/';
  public villes : (Ville)[] = [];


  getVilles(){
    return this.http.get<Ville[]>(this.API_URL+"villes");
  }


  
  constructor(
    private http: HttpClient) { }

  register(name: String, date_ns: Date, ville: String, genre: String, email: String, password: String) {

    return this.http.post(this.API_URL + 'register',
      {name: name, date_ns: date_ns, ville: ville, genre: genre, email: email, password: password}
    )
  }

  // getVilles() {
  //   return this.http.get(this.API_URL + 'getVilles').pipe(
  //     tap(data => {
  //       for(let index of Object.keys(data['villes']))
  //       {
  //         this.villes.push(data['villes'][index]);
  //       }
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //     )
  //   )
  // }
}
