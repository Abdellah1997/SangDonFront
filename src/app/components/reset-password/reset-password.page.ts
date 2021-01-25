import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetService } from 'src/app/services/reset/reset.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  public form = {
    email:null,
    password:null,
    confirm:null,
    resetToken : null
  }

  public error = null;
  // --- Méthode de vérification de confirmation du password ---
  verifyConfirm(form: NgForm) {
    if(form.value.password == form.value.confirm)
      return true;
    else
      return false;
  }

  constructor(private route : ActivatedRoute,  private router : Router, private resetService: ResetService) {
      this.route.queryParams.subscribe(params =>
      this.form.resetToken = params['token']
      );
     }

     reset(form: NgForm){
       if(this.verifyConfirm)
       {
           this.resetService.reset(form).subscribe(
            data => this.handleResponse(data),
            error =>this.handleError(error)
          )
       }
       else 
       {
        this.error = "Confirmation de mot de passe incorrect !";
        this.handleError(this.error);
        console.log("Confirmation de mot de passe incorrect !");
    }
     
  }


  handleResponse(data)
  {
    let _router = this.router;
    this.router.navigateByUrl('/home');
  }

  handleError(error)
  {
    this.error = error.error.errors;

  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form.email);
    console.log(this.form.password);
    console.log(this.form.confirm);
  }

}
