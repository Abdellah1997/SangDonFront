import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';

import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/User';
import { Statistique } from 'src/app/models/statistique';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public user = new User();
  public stats = new Statistique();

  constructor(
    private loginService: LoginService,
    private navCtrl: NavController,
    private menu: MenuController
  ) { 
  }

  // --- Méthode pour s'assurer que l'utilisateur est connecté ---
  // isLoggedIn() {
  //   if(!this.loginService.isLoggedIn)
  //     this.navCtrl.navigateRoot('/login');
  //   else
  //   {  
  //     this.user = this.loginService.user
  //     
  //     this.loginService.profile();
  //     
      
  //   }
  // }

  ngOnInit() {
    this.user = this.loginService.user
    this.stats = this.loginService.stats;
    this.menu.enable(true);

  }

}
