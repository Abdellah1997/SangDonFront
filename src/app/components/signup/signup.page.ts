import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SignupService } from 'src/app/services/signup/signup.service'
import { LoginService } from 'src/app/services/login/login.service';
import { Ville } from 'src/app/models/Ville';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public error = null;
  public villes : Ville[] = [];

  constructor(
    private router: Router,
    private signupService: SignupService,
    private loginService: LoginService,
    private modalController: ModalController,
    private menu: MenuController,
    private navCtrl: NavController
  ) {
    this.menu.enable(false);
    this.allCities();
    //this.villes = signupService.getVilles();
   }

   allCities(){
    this.signupService.getVilles().subscribe((villes) => this.villes = villes)
  }

  // --- Méthode pour fermer cette page ---
  dismissRegister() {
    this.modalController.dismiss();
  }
  
  // --- Méthode de vérification de confirmation du password ---
  verifyConfirm(form: NgForm) {
    if(form.value.password == form.value.confirmPwd)
      return true;
    else
      return false;
  }

  // --- Méthode register ---
  register(form: NgForm) {
    if(this.verifyConfirm(form)) {
     
    this.signupService.register(form.value.name, form.value.date_ns, form.value.ville, form.value.genre, form.value.email, form.value.password).subscribe(
      data => {
        this.loginService.login(form.value.email, form.value.password).subscribe(
          data => {
          },
          error => {
            this.handleError(error);
            console.log(error);
          },
          () => {
            this.dismissRegister();
            this.navCtrl.navigateRoot('/accueil');
          }
        );
      
      },
      error => {
        this.handleError(error);
        console.log(error);
      },
      () => {
        
      }
    );
    }
    else {
      this.error = "Confirmation de mot de passe incorrect !";
      this.handleError(this.error);
      console.log("Confirmation de mot de passe incorrect !");
    }
  }

  // ---- Affichage du message d'erreur ----
  handleError(error) {
    this.error = error.error;
  }

  ngOnInit(): void {
  }
}
