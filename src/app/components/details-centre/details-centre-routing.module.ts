import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsCentrePage } from './details-centre.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsCentrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsCentrePageRoutingModule {}
