import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from 'src/app/models/Demande';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page';
import { AcceuilService } from 'src/app/services/accueil/acceuil.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  public demandes= [];
  public demande : any = {
    id : 0,
    typeSang : "",
    adresse:""
  };
  constructor(private router: Router,private accueils:AcceuilService,public modalController: ModalController ) { }
  ngOnInit() {
   /* this.demandes = [
      { id:1,typeSang: 'ab-' },
      { id:2, typeSang: 'a-' },
      { id:3,typeSang: 'o+'},
      { id:4,typeSang: 'ab+'},
      { id:5,typeSang: 'a+'},
      { id:6,typeSang: 'o-' }
  ];*/
  this.accueils.getdemandes().subscribe((data)=> {
    console.log(data);
    console.log(data.length);
    for(let i=0;i<data.length;i++)
    {
console.log(data[i].id);
this.demande={
  id:data[i].id,
  typeSang:data[i].id_type_sang,
  adresse:"helllo"
}
this.demandes.push(this.demande);
    }
  },
  (error) => {                              //Error callback
    console.error('error');
  }
  );
  }
  public postuler()
  {
    this.router.navigate(['/demander']);

  }
  async presentModal() {
   const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }
  public appliquer(adresse)
  {
    this.presentModal();let resp=this.accueils.appliquer(adresse);
resp.subscribe(
 (data) => {                        //Next callback
  console.log("Inserted");
},
(error) => {                              //Error callback
  console.error('error');
}
  );
  }
}
