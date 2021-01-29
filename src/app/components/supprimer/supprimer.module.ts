import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupprimerPageRoutingModule } from './supprimer-routing.module';

import { SupprimerPage } from './supprimer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupprimerPageRoutingModule
  ],
  declarations: [SupprimerPage]
})
export class SupprimerPageModule {}
