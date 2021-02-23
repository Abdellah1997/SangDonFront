import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { RendezvousService } from 'src/app/services/rendezvous/rendezvous.service';
import { Centres } from 'src/app/models/Centre';
import { Rendezvous } from 'src/app/models/Rendezvous';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.page.html',
  styleUrls: ['./rendezvous.page.scss'],
})
export class RendezvousPage implements OnInit {
  centres : Centres[];
  rendezvous : Rendezvous;
  constructor(private _router: Router,
    private rendezvousService: RendezvousService) { }

  ngOnInit():void {
    this.getCentres();
  }
  private getCentres() {
    this.rendezvousService.getCentres().subscribe(data=>{
      this.centres=data
    })
  }
  private addrendezvous(){
    this.rendezvousService.createRendezVous(this.rendezvous).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    })
  }
  

}
