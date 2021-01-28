import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details-centre',
  templateUrl: './details-centre.page.html',
  styleUrls: ['./details-centre.page.scss'],
})
export class DetailsCentrePage implements OnInit {

  constructor(private router:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.router.pop();
  }

}
