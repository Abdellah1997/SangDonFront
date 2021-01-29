import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public error = null;

  constructor(
    private loginService: LoginService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private menuCtrl : MenuController,
  ) { 
      this.menuCtrl.enable(false);
  }

  // --- Méthode pour fermer cette page ---
  dismissLogin() {
    this.modalController.dismiss();
  }

  // --- Méthode login ---
  login(form: NgForm) {

    this.loginService.login(form.value.email, form.value.password).subscribe(
      data => {},
      error => {
        // this.alertService.presentToast(error.error.error);
        this.handleError(error);
        console.log(error);
      },
      () => {
        this.dismissLogin();
        this.navCtrl.navigateRoot('/dashboard');
      }
    );
  }

  // ---- Affichage du message d'erreur ----
  handleError(error) {
    this.error = error.error.error;
  }
  
  ngOnInit(): void {
  }

}
