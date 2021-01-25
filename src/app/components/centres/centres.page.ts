import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centres',
  templateUrl: './centres.page.html',
  styleUrls: ['./centres.page.scss'],
})
export class CentresPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToDetails(){
    this.router.navigate(['']);
  }
}
