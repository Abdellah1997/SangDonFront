import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeleteService } from 'src/app/services/delete.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.page.html',
  styleUrls: ['./supprimer.page.scss'],
})
export class SupprimerPage implements OnInit {

  API_URL = 'http://localhost:8000/api/';
  constructor(private http: HttpClient, private deleteService: DeleteService, private router: Router) { }

  ngOnInit() {
  }


  supprimer(form: NgForm){
    this.deleteService.delete(form.value.password).subscribe(
      data => {
        console.log(data)
      },
      error => {
        // this.alertService.presentToast(error.error.error);
        
        console.log(error);
      },
      
    );
    this.router.navigate(['accueil'])

  }

}
