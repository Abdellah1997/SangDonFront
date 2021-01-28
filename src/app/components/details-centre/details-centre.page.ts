import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CentresService } from 'src/app/services/centres/centres.service';
@Component({
  selector: 'app-details-centre',
  templateUrl: './details-centre.page.html',
  styleUrls: ['./details-centre.page.scss'],
})
export class DetailsCentrePage implements OnInit {
  
  name: string = 'raha';

  constructor(
    private router:NavController,
    private activatedRoute: ActivatedRoute
    ) { }
    
  ngOnInit() {
    this.name = this.activatedRoute.snapshot.params['id'];
  }

  Back(){
    this.router.pop();
  }

}
