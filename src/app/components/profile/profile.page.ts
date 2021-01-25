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
   this.isLoggedIn();
   console.log("Hello "+ this.stats.don_an);
  }

  // --- Méthode pour s'assurer que l'utilisateur est connecté ---
  isLoggedIn() {
    if(!this.loginService.isLoggedIn)
      this.navCtrl.navigateRoot('/login');
    else
    {  
      this.user = LoginService.user;
      this.menu.enable(true);
      this.loginService.profile();
      this.stats = this.loginService.stats;
      
    }
  }

  ngOnInit() {
  }

}
