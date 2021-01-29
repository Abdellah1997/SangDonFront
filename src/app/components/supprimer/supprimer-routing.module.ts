import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupprimerPage } from './supprimer.page';

const routes: Routes = [
  {
    path: '',
    component: SupprimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupprimerPageRoutingModule {}
