import { SignupService } from 'src/app/services/signup/signup.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { Demande } from 'src/app/models/Demande';
import { User } from 'src/app/models/User';
import { Ville } from 'src/app/models/Ville';
import { DemandeService } from 'src/app/services/demande/demande.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Centre } from 'src/app/models/Centre';

@Component({
  selector: 'app-demander',
  templateUrl: './demander.page.html',
  styleUrls: ['./demander.page.scss'],
})
export class DemanderPage implements OnInit {
  public demande : Demande = {
    id : 0,
    type_sang_id : "",
    id_ville : 0,
    id_centre: 0
  }

  public user = new User();

  demandes : Demande[] = [];
  public villes : Ville[] = [];
  public centres : Centre[] = [];

  constructor(private demandeService : DemandeService,
    private navCtrl: NavController, 
    private menuCtrl: MenuController,
    private loginService: LoginService,
    private signupService: SignupService) { }

  ngOnInit() {
    this.allCities()
  }

  allCities(){
    this.signupService.getVilles().subscribe((villes) => this.villes = villes)
  }

  allCenters(id: number){
    this.demandeService.getCentres(id).subscribe((centres) => {
      
      this.centres = centres,
      console.log("Centres : " +this.centres[0])
    },
      error => {
        console.log(error);
      }
    )
  }
  //------ Ajouter une demande --------
  addDemande(){
    this.demande.id = this.loginService.user.id
    this.demandeService.add(this.demande).subscribe(
      data => {
        console.log("Bien envoyée!");
        this.demandes = [data]
        
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/profile');
      }
    )
  }

  changeVille(event){
    let id = this.demande.id_ville
    this.allCenters(id)

  }

  // --- Méthode pour s'assurer que l'utilisateur est connecté ---
  // isLoggedIn() {
  //   if(!this.loginService.isLoggedIn)
  //     this.navCtrl.navigateRoot('/login');
  //   else
  //   {  
  //     this.user = this.loginService.user;
  //     this.menuCtrl.enable(true);
  //   }
  // }
}