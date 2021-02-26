import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Statistique } from 'src/app/models/statistique';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;

  public token:any; //Token envoyé de La Backend (Laravel) lors du login
  API_URL = 'http://localhost:8000/api/';
  
  public user = new User();
  public stats = new Statistique();

  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
  ) { }

  login(email: String, password: String) {

    return this.http.post(this.API_URL + 'login',
      {email: email, password: password}
    ).pipe(
      tap(data => {
        // this.storage.setItem('token',this.token)
       // this.storage.set('token', data['token'])
        // .then(
        //   data => {
        //     console.log('Token Stored');
        //   },
        //   error => console.error('Error storing item', error)
        // );
        
        this.token = data['token'];
        this.user = data['user'];
        
        this.isLoggedIn = true;
        return data;
      })
    );
    
  }

  logout() {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(this.API_URL + 'logout', { headers: headers })
    .pipe(
      tap(data => {
        // this.storage.remove("token");
        this.token = null
        this.user = new User()
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
  }

  profile(){
    this.getTotalDemande();
    this.getTotalDon();
    this.getDonAn();
    this.getnextDon();
    return this.stats
  }
  getTotalDemande(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(this.API_URL + `dons/stats/${this.user.id}` , { headers: headers }).pipe(
      tap(
        data =>{
            console.log(this.token)
            this.stats.t_demande= data['demandes'];
      },
        error =>console.log(error)
      )
    )
  }

  getTotalDon(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(this.API_URL + `dons/${this.user.id}` , { headers: headers }).pipe(
      tap(
        data =>{
          
            this.stats.t_don= data['t_don'];
      },
        error =>console.log(error)
      )
    )
  }

  getDonAn(){

    // console.log("GETDonAn : "+this.stats.don_an);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(this.API_URL + `dons/stats/year/${this.user.id}` , { headers: headers }).pipe(
      tap(
        data =>{
            console.log("115 : " + data)
            this.stats.don_an= data['don_an'];
            
      },
        error =>console.log(error)
      )

    ) 
  }

  getnextDon(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(this.API_URL + `dons/next/${this.user.id}` , { headers: headers }).pipe(
      tap(
        data =>{
          
            this.stats.next_don= data['next_don'];
      },
        error =>console.log(error)
      )
    )
  }
}
