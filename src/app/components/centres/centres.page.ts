import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CentresService } from 'src/app/services/centres/centres.service';

@Component({
  selector: 'app-centres',
  templateUrl: './centres.page.html',
  styleUrls: ['./centres.page.scss'],
})
export class CentresPage implements OnInit {
  
  public posts$;
  public static id: number;

  constructor(
    private _router: Router,
    private _http: CentresService
    ) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts(): void {
    this._http.getCentres().subscribe(
      data => {
        console.log(data)
        this.posts$ = data
        
      },
      error => {
        // this.alertService.presentToast(error.error.error);
        
        console.log(error);
      });
    }

  goToDetails(post){
    CentresPage.id = post.id
    this._router.navigate(['details']);
    console.log('go details');
  }
}
