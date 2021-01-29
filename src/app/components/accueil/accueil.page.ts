import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from 'src/app/models/Demande';
import { AcceuilService } from 'src/app/services/accueil/acceuil.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  public demandes= [];
  constructor(private router: Router,private accueils:AcceuilService ) { }
  ngOnInit() {
    this.demandes = [
      { id:1,typeSang: 'ab-' },
      {id:2, typeSang: 'a-' },
      { id:3,typeSang: 'o+'},
      { id:4,typeSang: 'ab+'},
      { id:5,typeSang: 'a+'},
      { id:6,typeSang: 'o-' }
  ];
  this.accueils.getdemandes().subscribe(data=> this.demandes=data)
  }
  public postuler()
  {
    this.router.navigate(['/demander']);
  }
  public appliquer(id)
  {
this.accueils.appliquer(id);
let resp=this.accueils.appliquer(id);
resp.subscribe(
 (data) => {                           //Next callback
  console.log("all went good");
  this.router.navigate(['/rendez-vous']);
},
(error) => {                              //Error callback
  console.error('error caught in component')
}
  );
  }
}
