import { LoginService } from 'src/app/services/login/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  API_URL = 'http://localhost:8000/api';
  error:null;

  constructor(private http: HttpClient) { }

   forgot(email: String) {
    console.log("E-mail in service : " + email);

    this.http.post(`${this.API_URL}/reset-password-request`, {email: email}).subscribe(
      data  => console.log(data),
      error => console.log("ERROOOOOR")
    )

  }

   // ---- Affichage du message d'erreur ----
  handleError(error) {
    this.error = error.error.error;
  }


}
