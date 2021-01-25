import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotService } from 'src/app/services/forgot/forgot.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  public form = {
    email:null
  }
  constructor(private router:Router, private forgotService: ForgotService) { }

  ngOnInit() {
  }

  forgot(form: NgForm){
    console.log(this.form.email);
    this.forgotService.forgot(form.value.email);

  }
}
