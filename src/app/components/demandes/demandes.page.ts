import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Demandes } from 'src/app/models/Demandes';
import { DemandesService } from 'src/app/services/demandes/demandes.service';
@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.page.html',
  styleUrls: ['./demandes.page.scss'],
})
export class DemandesPage implements OnInit {
  demandes : Demandes[];
  
  
  Demandes : Demandes[] = [];
  constructor(
    private router: Router,
    private demandeService: DemandesService
    ) { }

  ngOnInit():void {
    this.getDemandes();
  }
  private getDemandes() {
    this.demandeService.getDemandes().subscribe(data =>{
      this.demandes=data;
    })
  }
  Delete(id:number){
    this.demandeService.Delete(id).subscribe(data=>{
      this.getDemandes();
    })
  }

}
