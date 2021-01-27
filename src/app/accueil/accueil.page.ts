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
      { type: 'ab', description: 'hopital raid' },
      { type: 'a', description: 'centre de donnation chifae' },
      { type: 'o', description: 'clinique salam' },
      { type: 'ab', description: 'hopital raid' },
      { type: 'a', description: 'centre de donnation chifae' },
      { type: 'o', description: 'clinique salam' }
      
  ];
  }
  public postuler()
  {

  }

}
