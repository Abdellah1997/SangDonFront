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
  
  public posts$: Observable<any[]>;

  constructor(
    private _router: Router,
    private _http: CentresService
    ) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts(): void {
    this.posts$ = this._http.get('fakeApi', '/posts');
  }

  goToDetails(post){
    this._router.navigate(['details-centre'], post.id);
    console.log('go details');
  }
}
