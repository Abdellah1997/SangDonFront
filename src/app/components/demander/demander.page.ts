import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { Demande } from 'src/app/models/Demande';
import { User } from 'src/app/models/User';
import { DemandeService } from 'src/app/services/demande/demande.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-demander',
  templateUrl: './demander.page.html',
  styleUrls: ['./demander.page.scss'],
})
export class DemanderPage implements OnInit {

  public demande : Demande = {
    id : 0,
    typeSang : ""
  }

  public user = new User();

  demandes : Demande[] = [];

  constructor(private demandeService : DemandeService,
    private navCtrl: NavController, 
    private menuCtrl: MenuController,
    private loginService: LoginService) { }

  ngOnInit() {
  }

  //------ Ajouter une demande --------
  addDemande(){
    this.demandeService.add(this.demande).subscribe(
      data => {
        console.log("Bien envoyée!");
        this.demandes = [data, ...this.demandes]
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/profile');
      }
      )
  }

  // --- Méthode pour s'assurer que l'utilisateur est connecté ---
  isLoggedIn() {
    if(!this.loginService.isLoggedIn)
      this.navCtrl.navigateRoot('/login');
    else
    {  
      this.user = LoginService.user;
      this.menuCtrl.enable(true);
    }
  }
}