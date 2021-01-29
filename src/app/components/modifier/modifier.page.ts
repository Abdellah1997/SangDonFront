import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

import { ModifierService } from 'src/app/services/modifier/modifier.service';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/User';
import { Ville } from 'src/app/models/Ville';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {
  public error = null;
  public user = new User();
  public villes : Ville[] = [];

  constructor(
    private modifierService: ModifierService,
    private modalController: ModalController,
    private loginService : LoginService,
    private navCtrl: NavController,
    private menu: MenuController,
  ) { 
    this.isLoggedIn();
    this.allCities();
  }

  allCities(){
    this.modifierService.getVilles().subscribe((villes) => this.villes = villes)
  }


  // --- Méthode pour s'assurer que l'utilisateur est connecté ---
  isLoggedIn() {
    if(!this.loginService.isLoggedIn)
      this.navCtrl.navigateRoot('/login');
    else
    {  
      this.user = LoginService.user;
      this.menu.enable(true);
    }
  }

  // --- Méthode pour fermer cette page ---
  dismissLogin() {
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
  edit(form: NgForm) {
    if(this.verifyConfirm(form)) {

    this.modifierService.edit(form.value.name, form.value.date_ns, form.value.ville, form.value.genre, form.value.email, form.value.password).subscribe(
      data => {
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/home');
      }
    )
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

  ngOnInit() {
    console.log("Connected Email in Edit page : " + this.user.email);
  }

}
