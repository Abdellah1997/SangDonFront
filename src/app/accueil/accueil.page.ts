import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  public demandes: Array<any>;
  constructor() { }

  ngOnInit() {
    this.demandes = [
      { id:1,type: 'ab', description: 'hopital raid' },
      {id:2, type: 'a', description: 'centre de donnation chifae' },
      { id:3,type: 'o', description: 'clinique salam' },
      { id:4,type: 'ab', description: 'hopital raid' },
      { id:5,type: 'a', description: 'centre de donnation chifae' },
      { id:6,type: 'o', description: 'clinique salam' }
  ];
  }
  public postuler()
  {
console.log("hellloo");
  }
  public appliquer(id)
  {
console.log(id);
  }
}
