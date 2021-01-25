import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemanderPage } from './demander.page';

const routes: Routes = [
  {
    path: '',
    component: DemanderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemanderPageRoutingModule {}
